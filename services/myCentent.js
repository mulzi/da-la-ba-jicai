import { Auth } from '@/services/auth'
import { TIME_OUT } from '@/utils/constants'

export class HomeService {
  constructor (context) {
    this.context = context
    this.axios = context.$axios
    this.cookies = context.app.$cookies
    this.auth = new Auth(this.context)
  }

  async getUser () { // 获取个人信息
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/basic/open/user.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async putUser (params) { // 修改个人信息
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/basic/open/user.json`,
      method: 'PUT',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      data: params
    })
  }
  async getAccount (params) { // 积分明细
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/score/open/accountDetail.json`,
      method: 'get',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getWorksCol (params) { // 作品收藏
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/works/open/getCollection.json`,
      method: 'get',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getSupplierCol (params) { // 供应商、设计方收藏 attribute 供应商传0 设计方3
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/supplier/open/supplier/getCollection.json`,
      method: 'get',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async getBalance () { // 查询积分
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/score/open/balance.json`,
      method: 'get',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
      // eslint-disable-next-line no-undef
    })
  }
  async buyOrder (params) { // 购买积分创建订单
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/score/open/recharge/order.json`,
      method: 'POST',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async buyPayment (params) { // 购买积分创建支付链接
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/trade/open/payment.json`,
      method: 'POST',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
  async buyStatus (params) { // 购买积分 监听订单是否支付
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `/api/trade/open/payment/status.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT,
      // eslint-disable-next-line no-undef
      params
    })
  }
}
