import Vuex from "vuex";
import wines from './modules/wines';
import auth from './modules/auth';

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
    wines,
    auth
  },
})