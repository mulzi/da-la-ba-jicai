import { Auth } from '@/services/auth'
import { TIME_OUT } from '@/utils/constants'

export class HomeService {
  constructor (context) {
    this.context = context
    this.axios = context.$axios
    this.cookies = context.app.$cookies
    this.auth = new Auth(this.context)
  }
  async getArea () { // 获取项目信息列表地区
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
  async getType () { // 获取项目信息列表类别
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/project/type.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async getPhase () { // 获取项目信息列表阶段
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/project/phase.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async getPage (params) { // 获取项目信息列表阶段
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `api/info/open/project/page.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getProject (params) { // 获取项目信息详情
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/project/${params}.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async getContact (params) { // 获取项目信息联系方式
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/project/contact/${params}.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async getIntelligences (params) { // 获取项目信息精准情报
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/project/intelligences/${params}.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async postIntelligences (params) { //
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/project/intelligence.json`,
      method: 'POST',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      data: params
    })
  }
  async postProject (params) { //
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/project/project.json`,
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
