export const state = () => ({
  toUserId: '',
  toId: '',
  toName: '',
  num: 0,
  oneID: '', // 普通项目ID
  twoID: '', // 精准项目ID
  messageBox: false, // 留言回复框
  IntegralPay: false, // 积分支付查看开关
  proDetails: false, // 项目信息查看开关
  projectClass: '', // 积分消费类型
  dateA: true,
  dateB: false,
  dateC: false,
  dateD: false,
  dateE: false

})

export const mutations = {
  changeDateA (state) {
    state.dateA = !state.dateA
    state.dateB = false
    state.dateC = false
    state.dateD = false
    state.dateE = false
  },
  changeDateB (state) {
    state.dateA = false
    state.dateB = !state.dateB
    state.dateC = false
    state.dateD = false
    state.dateE = false
  },
  changeDateC (state) {
    state.dateA = false
    state.dateB = false
    state.dateC = !state.dateC
    state.dateD = false
    state.dateE = false
  },
  changeDateD (state) {
    state.dateA = false
    state.dateB = false
    state.dateC = false
    state.dateD = !state.dateD
    state.dateE = false
  },
  changeDateE (state) {
    state.dateA = false
    state.dateB = false
    state.dateC = false
    state.dateD = false
    state.dateE = !state.dateE
  },
  changeUID (state, payload) {
    state.toUserId = payload
  },
  changeTOID (state, payload) {
    state.toId = payload
  },
  changeName (state, payload) {
    state.toName = payload
  },
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
