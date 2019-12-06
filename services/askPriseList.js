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
      url: `/api/basic/open/getAreasExcludeProvince.json`,
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
      url: `/api/supplier/open/containAll/categories.json`,
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
      url: `/api/info/open/mini/recruits.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getDetails (params) { // 获取详情
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/recruit/${params}.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async postList (params) { // 招募需求表单
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/recruit.json`,
      method: 'POST',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      data: params
    })
  }
  async postSuccess (params) { // 招募需求表单
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/case/successCase.json`,
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
