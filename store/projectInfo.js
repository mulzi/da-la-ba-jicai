export const state = () => ({
  projectOne: true,
  projectTwo: false,
  projectThree: false,
  oneID: '', // 普通项目ID
  twoID: '', // 精准项目ID
  IntegralPay: false, // 积分支付查看开关
  proDetails: false, // 项目信息查看开关
  projectClass: '' // 积分消费类型
})

export const mutations = {
  changeOne (state) {
    state.projectOne = true
    state.projectTwo = false
    state.projectThree = false
  },
  changeTwo (state) {
    state.projectOne = false
    state.projectTwo = true
    state.projectThree = false
  },
  changeThree (state) {
    state.projectOne = false
    state.projectTwo = false
    state.projectThree = true
  },
  changeOneID (state, payload) {
    state.oneID = payload
  },
  changeTwoID (state, payload) {
    state.twoID = payload
  },
  changeClass (state, payload) {
    state.projectClass = payload
  },
  changeIntegralPay (state) {
    state.IntegralPay = !state.IntegralPay
  },
  changeProDetails (state) {
    state.proDetails = !state.proDetails
  }
}
