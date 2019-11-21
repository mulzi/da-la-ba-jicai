export const state = () => ({
  number: 0,
  num: 0
})

export const mutations = {
  changeNumber (state, payload) {
    state.number = payload
  },
  changeNum (state, payload) {
    state.num = payload
  }
}
