import Vue from "vue";
import Vuex, { Module } from "vuex";
import mutations from "./mutations"
import getters from "./getters"
import actionConstructor from "./actionConstructor"
import state from "./state"
import RootState from "@/store/types";
import AxiosApi from "@/API";
import TestState from "./types";

const api = AxiosApi.getInstance();
const actions = actionConstructor(api);

Vue.use(Vuex);

const test: Module<TestState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules: {},
};

export default test;
