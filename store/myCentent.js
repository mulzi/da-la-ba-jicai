export const state = () => ({
  menuId: 0, // 菜单样式
  menuBId: 999, // 菜单样式2
  pointDes: false // 积分说明
})
export const mutations = {
  changeMenuId (state, payload) {
    state.menuId = payload
  },
  changeMenuBId (state, payload) {
    state.menuBId = payload
  },
  changePoints (state) {
    state.pointDes = !state.pointDes
  }
}
