export const state = () => ({
  popup: false
})

export const mutations = {
  changePopup (state) {
    state.popup = !state.popup
  }
}
