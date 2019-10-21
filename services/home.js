import { Auth } from '@/services/auth'
import { TIME_OUT } from '@/utils/constants'

const host = ''

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
      url: `${host}/api/application/open/home.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
    })
  }
  async supplierType () {
    const token = await this.auth.checkAndRefreshToken()
    return this.axios({
      url: `${host}/api/supplier/open//findAllNavigation.json`,
      method: 'GET',
      headers: {
        Authorization: token.accessToken
      },
      timeout: TIME_OUT
    })
  }
}
