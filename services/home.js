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
}
