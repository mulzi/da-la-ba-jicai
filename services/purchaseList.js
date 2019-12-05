import { Auth } from '@/services/auth'
import { TIME_OUT } from '@/utils/constants'

export class HomeService {
  constructor (context) {
    this.context = context
    this.axios = context.$axios
    this.cookies = context.app.$cookies
    this.auth = new Auth(this.context)
  }

  async getArea () { // 获取地区
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/project/area.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async getAreas () { // 获取地区第二接口 建表
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/basic/open/area/getAreas.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async getType () { // 获取类型
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/purchase/type.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async getList (params) { // 获取列表
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/purchases.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getDetails (params) { // 获取列表
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/purchase/${params}.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async postRecruit (params) { // 发布招采信息
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/purchase.json`,
      method: 'POST',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      data: params
    })
  }
}
