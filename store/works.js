export const state = () => ({
  toUserId: '',
  toId: '',
  toName: '',
  messageBox: false,
  commentBox: true, // 重绘留言板块
  messageBoxTwo: false,
  styleOne: 0, // 第一级样式
  styleTwo: 0, // 第二级样式
  styleThree: 0, // 第三级样式
  oneUrl: 'user', // 一级路由
  twoUrl: '', // 二级路由
  threeUrl: '', // 三级路由
  sourceId: 10000, // 板块临时存储
  typeId: 0, // 产品分类临时存储
  styleId: 0, // 作品风格临时存储
  searchId: 0 // 搜索类型临时存储
})
export const mutations = {
  chSourceId (state, payload) {
    state.sourceId = payload
  },
  chTypeId (state, payload) {
    state.typeId = payload
  },
  chStyleId (state, payload) {
    state.styleId = payload
  },
  chSearchId (state, payload) {
    state.searchId = payload
  },
  chSOne (state, payload) {
    state.styleOne = payload
  },
  chSTwo (state, payload) {
    state.styleTwo = payload
  },
  chSThree (state, payload) {
    state.styleThree = payload
  },
  chUOne (state, payload) {
    state.oneUrl = payload
  },
  chUTwo (state, payload) {
    state.twoUrl = payload
  },
  chUThree (state, payload) {
    state.threeUrl = payload
  },
  changeUID (state, payload) {
    state.toUserId = payload
  },
  changeTOID (state, payload) {
    state.toId = payload
  },
  changeName (state, payload) {
    state.toName = payload
  },
  changeMsg (state) {
    state.messageBox = !state.messageBox
  },
  changeComBox (state) {
    state.commentBox = !state.commentBox
  },
  changeMsgTwo (state) {
    state.messageBoxTwo = !state.messageBoxTwo
  }

}
