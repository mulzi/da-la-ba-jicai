export const state = () => ({
  home: 1,
  messageShow: false,
  payScore: '', // 查询板块积分数字
  IntegralPay: false, // 积分支付查看开关
  proDetails: false, // 项目信息查看开关
  loginText: false, // 未登录时的提示
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
  },
  changePayScore (state, pyload) {
    state.payScore = pyload
  },
  changeLoginText (state) {
    state.loginText = !state.loginText
  }
}
export const actions = {
  CHANGELOGIN ({ commit }, payload) {
    commit('changeLogin', payload)
  },
  CHANGEPAYSCORE ({ commit }, payload) {
    commit('changePayScore', payload)
  }
}
