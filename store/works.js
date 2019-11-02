export const state = () => ({
  messageBox: false
})
export const mutations = {
  changeMsg (state) {
    state.messageBox = !state.messageBox
  }

}
