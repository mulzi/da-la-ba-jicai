export const state = () => ({
  projectOne: true,
  projectTwo: false,
  projectThree: false
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
  }
}
