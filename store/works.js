export const state = () => ({
  messageBox: false,
  messageBoxTwo: false
})
export const mutations = {
  changeMsg (state) {
    state.messageBox = !state.messageBox
  },
  changeMsgTwo (state) {
    state.messageBoxTwo = !state.messageBoxTwo
  }

}
