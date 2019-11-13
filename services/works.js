import { Auth } from '@/services/auth'
import { TIME_OUT } from '@/utils/constants'

export class HomeService {
  constructor (context) {
    this.context = context
    this.axios = context.$axios
    this.cookies = context.app.$cookies
    this.auth = new Auth(this.context)
  }
  async getWorksDetails (params) { // 获取工程案列详情
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/works/open/details/${params}.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async getCollection (params) { // 收藏
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/collection/open/createCollection.json`,
      method: 'POST',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async delCollection (params) { // 取消收藏
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/collection/open/deleteCollection.json`,
      method: 'PUT',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getThumb (params) { // 点赞
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/basic/open/thumbUp.json`,
      method: 'POST',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async delThumb (params) { // 取消赞
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/basic/open/thumbUp.json`,
      method: 'DELETE',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
}
