import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations"
import getters from "./getters"
import actionConstructor from "./actionConstructor"
import state from "./state"
import RootState from "./types";
import AxiosApi from "@/API";
import testStore from "@/store/Test"
const api = AxiosApi.getInstance();
const actions = actionConstructor(api);
Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state,
  mutations,
  actions,
  getters,
  modules: {
    test: testStore,
  },
});
