import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
  },
  state: {
    view: undefined,
  },
  getters: {
    view: state => state.view,
  },
  mutations: {
    view(state, view) {
      state.view = view;
    },
  },
})
