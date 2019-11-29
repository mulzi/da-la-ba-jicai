export const state = () => ({
  toUserId: '',
  toId: '',
  toName: '',
  messageBox: false,
  commentBox: true, // 重绘留言板块
  messageBoxTwo: false
})
export const mutations = {
  changeUID (state, payload) {
    state.toUserId = payload
  },
  changeTOID (state, payload) {
    state.toId = payload
  },
  changeName (state, payload) {
    state.toName = payload
  },
  changeMsg (state) {
    state.messageBox = !state.messageBox
  },
  changeComBox (state) {
    state.commentBox = !state.commentBox
  },
  changeMsgTwo (state) {
    state.messageBoxTwo = !state.messageBoxTwo
  }

}
