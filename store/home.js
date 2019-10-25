export const state = () => ({
  home: 1,
  messageShow: false
})
export const mutations = {
  addhome (state, pyload) {
    state.home = pyload
  },
  changeMesShow (state, pyload) {
    state.messageShow = !state.messageShow
  }
}
