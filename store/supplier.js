export const state = () => ({
  supplierOne: 0,
  supplierTwo: 0,
  supplierThree: 0,
  supplierFour: 0
})
export const mutations = {
  changeSupplinerOne (state, pylod) {
    state.supplierOne = pylod
  },
  changeSupplinerTwo (state, pylod) {
    state.supplierTwo = pylod
  },
  changeSupplinerThree (state, pylod) {
    state.supplierThree = pylod
  },
  changeSupplinerFour (state, pylod) {
    state.supplierFour = pylod
  }
}
