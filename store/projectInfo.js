export const state = () => ({
  num: 0,
  oneID: '', // 普通项目ID
  twoID: '', // 精准项目ID
  messageBox: false, // 留言回复框
  IntegralPay: false, // 积分支付查看开关
  proDetails: false, // 项目信息查看开关
  projectClass: '' // 积分消费类型
})

export const mutations = {
  changeOne (state, payload) {
    state.num = payload
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
  },
  changeMsg (state) {
    state.messageBox = !state.messageBox
  }
}
