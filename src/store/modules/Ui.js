import { OPEN_POPUP, CLOSE_POPUP } from '@/store/mutation-types';

const state = () => ({
  popup: {
    newPerson: false,
  },
});

const mutations = {
  [OPEN_POPUP](state, payload) {
    state.popup[payload] = true;
  },

  [CLOSE_POPUP](state, payload) {
    state.popup[payload] = false;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
