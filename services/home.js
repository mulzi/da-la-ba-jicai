import { Auth } from '@/services/auth'
import { TIME_OUT } from '@/utils/constants'

export class HomeService {
  constructor (context) {
    this.context = context
    this.axios = context.$axios
    this.cookies = context.app.$cookies
    this.auth = new Auth(this.context)
  }

  async home () {
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/application/open/home.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
    })
  }
  async supplierType (params) { // 材料供应商一级
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/supplier/open/findAllNavigation.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async filterBySupplier (params) { // 材料供应商二三级
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/supplier/open/navigation.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async SupplierList (params) { // 材料供应商列表数据
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/supplier/open/condition.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async SupplierListParticulars (params) { // 材料供应商列表数据详情
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/supplier/open/details.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getComment (params) { // 获取全部评论接口
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/basic/open/assessments.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getGoodComment (params) { // 获取好评接口
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/basic/open/good/assessments.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getBadComment (params) { // 获取差评接口
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/basic/open/bad/assessments.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async order (params) { // 提交留言
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/supplier/open/createConsultation.json`,
      method: 'POST',
      headers: {
        Authorization: token.accessToken,
        'Content-type': 'application/json'
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      data: params
    })
  }
  async PostComment (params) { // 提交评论
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/basic/open/assessment.json`,
      method: 'POST',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      data: params
    })
  }
  async createCollection (params) { // 加入材料供应商收藏
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/supplier/open/createCollection.json`,
      method: 'POST',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async deletelCollection (params) { // 取消材料供应商收藏
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/supplier/open/deleteCollection.json`,
      method: 'PUT',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getCase (params) { // 获取工程案列详情
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/supplier/open/detail/getCase/${params}.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async getWorksOneList () { // 获取作品第一级栏目
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/works/open/allWorksSource.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async getWorksTwoList (params) { // 获取作品第二级栏目
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/works/open/navigation.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getWorksContList (params) { // 获取作品
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/works/open/condition.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getUserDetails (params) { // 获取设计施工方详情
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/supplier/open/design/details.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getUserTeam (params) { // 获取设计施工方团队介绍详情
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/supplier/open/supplier/getTeam/${params}.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async getHomeSuccse (params) { // 获取设计施工方团队介绍详情
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/info/open/case/detail/${params}.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async consumeScore (params) { // 积分消费
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/score/open/consume/order.json`,
      method: 'POST',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async postScore (params) { // 查询账户余额及积分价格
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/score/open/consume/consumeInfo/${params}.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async postHotProducts (params) { // 获取特价爆款
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/supplier/open/mini/hot/products/${params}.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
}
