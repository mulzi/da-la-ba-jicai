export const state = () => ({
  supplierOne: 0,
  supplierTwo: 0,
  supplierThree: 0,
  supplierFour: 0,
  categoryIdNu: 1, // 供应商ID临时存储
  materialIdNu: null, // 材料类别ID临时存储
  projectTypeIdNu: null, // 项目类别ID临时存储
  gradeNu: null, // 品牌档次ID临时存储
  pageID: 0, // 分页第几页
  sizeID: 20 // 分页数量
})
export const mutations = {
  changeSupplinerOne (state, pyload) {
    state.supplierOne = pyload
  },
  changeSupplinerTwo (state, pyload) {
    state.supplierTwo = pyload
  },
  changeSupplinerThree (state, pyload) {
    state.supplierThree = pyload
  },
  changeSupplinerFour (state, pyload) {
    state.supplierFour = pyload
  },
  changeCategoryIdNu (state, pyload) {
    state.categoryIdNu = pyload
  },
  changeMaterialIdNu (state, pyload) {
    state.materialIdNu = pyload
  },
  changeProjectTypeIdNu (state, pyload) {
    state.projectTypeIdNu = pyload
  },
  changeGradeNu (state, pyload) {
    state.gradeNu = pyload
  }
}
export const actions = {
  CHANGECategory ({ commit }, payload) {
    commit('changeCategoryIdNu', payload)
  },
  CHANGEMaterialIdNu ({ commit }, payload) {
    commit('changeMaterialIdNu', payload)
  },
  CHANGEProjectTypeIdNu  ({ commit }, payload) {
    commit('changeProjectTypeIdNu', payload)
  },
  CHANGEGradeNu ({ commit }, payload) {
    commit('changeGradeNu', payload)
  }
}
