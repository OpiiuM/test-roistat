import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import { RESET_STATE, SET_FILTER } from './mutation-types';
import vuexPlugins from '@/plugins/vuex-plugins';

Vue.use(Vuex);

const setupState = () => ({
  sortKey: null,
});

const state = setupState();

const getters = {};

const mutations = {
  [RESET_STATE](state) {
    Object.assign(state, setupState());
  },

  [SET_FILTER](state, payload) {
    state.sortKey = payload;
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  plugins: [vuexPlugins],
  modules,
});
