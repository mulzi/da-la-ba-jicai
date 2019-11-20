import qs from 'qs'
import uuid from 'uuid-random'
import { TIME_OUT } from '../utils/constants'
import { getDeviceId, getUserInfo, getUserToken, setDeviceId, setUserInfo, setUserToken } from '../utils/cookies'

const host = ''
export const CLIENT_ID = 'test_client_id'
export const VISITOR_IDENTITY = 'visitor_identity'
export const REFRESH_TOKEN = 'refresh_token'

export class Auth {
  constructor (context) {
    this.context = context
    this.axios = context.$axios
    this.cookies = context.app.$cookies
  }

  async sendValidCode (params) {
    const token = await this.checkAndRefreshToken()
    return this.axios({
      url: `/api/validation/open/mobile/sms.json`,
      headers: {
        Authorization: token.accessToken
      },
      method: 'POST',
      timeout: TIME_OUT,
      data: params,
      transformRequest: [function (data) {
        return qs.stringify(data)
      }]
    })
  }

  async register (params) {
    const token = await this.checkAndRefreshToken()
    return this.axios({
      url: `/api/basic/open/visitor/bind/register.json`,
      headers: {
        Authorization: token.accessToken
      },
      method: 'POST',
      timeout: TIME_OUT,
      data: params
    })
  }

  login (params) {
    return this.axios({
      url: `/api/authz/oauth2/token.json`,
      method: 'POST',
      timeout: TIME_OUT,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params,
      transformRequest: [function (data) {
        return qs.stringify(data)
      }]
    })
  }

  async findBackPassword (params) {
    const token = await this.checkAndRefreshToken()
    return this.axios({
      url: `/api/basic/open/findBackPassword.json`,
      method: 'PUT',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      data: params,
      transformRequest: [function (data) {
        return qs.stringify(data)
      }]
    })
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
    const userToken = setUserToken(this.cookies, res.data)
    return Promise.resolve(userToken)
  }

  setUserToken (userToken) {
    return setUserToken(this.cookies, userToken)
  }

  setUserInfo (userInfo) {
    return setUserInfo(this.cookies, userInfo)
  }

  isLogin () {
    const userToken = getUserToken(this.cookies)
    if (!userToken) {
      return false
    }
    const userInfo = getUserInfo(this.cookies)
    if (!userInfo) {
      return false
    }
    return userInfo.userType === 'register'
  }

  async visitorLogin (visitorIdentity) {
    const params = {
      client_id: CLIENT_ID,
      grant_type: VISITOR_IDENTITY,
      visitor_identity: visitorIdentity
    }
    const tokenRes = await this.fetchToken(params)
    const userToken = setUserToken(this.cookies, tokenRes.data)
    const userRes = await this.fetchUserInfo({ accessToken: userToken.accessToken })
    setUserInfo(this.cookies, userRes.data)
    return Promise.resolve(userToken)
  }
  async delCookies () {
    this.cookies.removeAll()
    await this.checkAndRefreshToken()
  }

  async checkAndRefreshToken () {
    // 判断设备号
    let deviceId = getDeviceId(this.cookies)
    if (deviceId === undefined) {
      deviceId = uuid()
      setDeviceId(this.cookies, deviceId)
    }
    let userToken = getUserToken(this.cookies)
    const userInfo = getUserInfo(this.cookies)
    if (userToken === undefined || userInfo === undefined) {
      // 游客登录
      userToken = await this.visitorLogin(deviceId)
    }
    // token是否过期
    const current = new Date().getTime()
    if (current >= userToken.expiredAt) {
      // 刷新令牌
      userToken = await this.refreshToken(userToken.refreshToken)
    }
    console.log(userToken)
    return userToken
  }
}
