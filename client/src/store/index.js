import Vuex from "vuex";
import wines from './modules/wines';
import auth from './modules/auth';
import orders from './modules/orders';

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
    auth,
    orders
  },
})