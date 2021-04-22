import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import state from './state';
import getters from './getters'
import mutations from './mutations'
import player from './modules/player'


export default new Vuex.Store({
  state: {
    ...state
  },
  mutations: {
    ...mutations
  },
  getters: {
    ...getters,
  },
  actions: {
    ...actions
  },
  modules: {
    player
  }
})