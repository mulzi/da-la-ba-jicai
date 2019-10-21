import qs from 'qs'
import uuid from 'uuid-random'
import { TIME_OUT } from '../utils/constants'
import { getDeviceId, getUserInfo, getUserToken, setDeviceId, setUserInfo, setUserToken } from '../utils/cookies'

const host = ''
const CLIENT_ID = 'test_client_id'
export const VISITOR_IDENTITY = 'visitor_identity'
export const REFRESH_TOKEN = 'refresh_token'

export class Auth {
  constructor (context) {
    this.context = context
    this.axios = context.$axios
    this.cookies = context.app.$cookies
  }

  fetchToken (params) {
    return this.axios({
      url: `${host}/api/authz/oauth2/token.json`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      timeout: TIME_OUT,
      data: params,
      transformRequest: [function (data) {
        return qs.stringify(data)
      }]
    })
  }

  fetchUserInfo (params) {
    const { accessToken } = params
    const token = accessToken === undefined ? getUserToken(this.cookies) : params
    return this.axios({
      url: `${host}/api/authz/user/info.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      params
    })
  }

  async refreshToken (refreshToken) {
    const params = {
      client_id: CLIENT_ID,
      grant_type: REFRESH_TOKEN,
      refresh_token: refreshToken
    }
    const res = await this.fetchToken(params)
    setUserToken(this.cookies, res.data)
  }

  async visitorLogin (visitorIdentity) {
    const params = {
      client_id: CLIENT_ID,
      grant_type: VISITOR_IDENTITY,
      visitor_identity: visitorIdentity
    }
    const promise = this.fetchToken(params)
      .then((tokenRes) => {
        setUserToken(this.cookies, tokenRes.data)
        return tokenRes
      })
      .then((tokenRes) => {
        return this.fetchUserInfo({ accessToken: tokenRes.data.access_token })
      }).then((userRes) => {
        setUserInfo(this.cookies, userRes.data)
      })
    await promise
  }

  async checkAndRefreshToken () {
    // 判断设备号
    let deviceId = getDeviceId(this.cookies)
    if (deviceId === undefined) {
      deviceId = uuid()
      setDeviceId(this.cookies, deviceId)
    }
    const userToken = getUserToken(this.cookies)
    const userInfo = getUserInfo(this.cookies)
    if (userToken === undefined || userInfo === undefined) {
      // 游客登录
      await this.visitorLogin(deviceId)
    }

    // token是否过期
    const current = new Date().getTime()
    if (current >= userToken.expiredAt) {
      // 刷新令牌
      await this.refreshToken(userToken.refreshToken)
    }

    return getUserToken(this.cookies)
  }
}
