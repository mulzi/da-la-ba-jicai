export const state = () => ({
  menuId: 0,
  menuBId: 999
})
export const mutations = {
  changeMenuId (state, payload) {
    state.menuId = payload
  },
  changeMenuBId (state, payload) {
    state.menuBId = payload
  }
}
