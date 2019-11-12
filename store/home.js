export const state = () => ({
  home: 1,
  messageShow: false,
  IntegralPay: false, // 积分支付查看开关
  proDetails: false, // 项目信息查看开关
  isLogin: '' // 登录判断
})
export const mutations = {
  addhome (state, pyload) {
    state.home = pyload
  },
  changeMesShow (state, pyload) {
    state.messageShow = !state.messageShow
  },
  changeIntegralPay (state) {
    state.IntegralPay = !state.IntegralPay
  },
  changeProDetails (state) {
    state.proDetails = !state.proDetails
  },
  changeLogin (state, pyload) {
    state.isLogin = pyload
  }
}
