import { createStore } from 'vuex'

export default createStore({
  state: {
    menuItems: [],
    userInfo: {
      name: '系统管理员'
    },
    dic: {
      name: [
        { 0: '正常' },
        { 1: '挂起' },
        { 2: '注销' }
      ]
    }
  },
  mutations: {
    menuItems (state, payload) {
      state.menuItems = payload
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    menuItems: state => state.menuItems,
    userInfo: state => state.userInfo
  }
})
