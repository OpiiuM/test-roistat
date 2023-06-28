import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import { RESET_STATE, SET_SORT_KEY } from './mutation-types';
import vuexPlugins from '@/plugins/vuex-plugins';

Vue.use(Vuex);

const setupState = () => ({
  sortKey: null,
});

const state = setupState();

const mutations = {
  [RESET_STATE](state) {
    Object.assign(state, setupState());
  },

  [SET_SORT_KEY](state, payload) {
    state.sortKey = payload;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  plugins: [vuexPlugins],
  modules,
});
