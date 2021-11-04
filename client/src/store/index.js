import Vuex from "vuex";
import wines from './modules/wines';
import { createStore } from 'vuex'

export default new Vuex.Store({
  name: "store",
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    wines
  },
})