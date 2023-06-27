import { RESET_STATE, SET_USERS, ADD_EMPLOY } from '@/store/mutation-types';
import { deepSortEmployees, getUserById } from '@/common/helpers';
import { USER_OPTIONS_DEFAULT } from '@/common/constants';
import mockUsers from '@/mocks/users.json';

const setupState = () => ({
  users: [],
});

const state = setupState();

const getters = {
  sortedUsers(state, getters, rootState) {
    if (rootState.sortKey) {
      return deepSortEmployees(state.users, rootState.sortKey);
    }

    return state.users;
  },

  usersOptions(state) {
    const arr = [...state.users];

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];

      if (element.employees.length > 0) {
        arr.push(...element.employees);
      }
    }

    return USER_OPTIONS_DEFAULT.concat(arr.map((el) => ({
      name: el.name,
      value: el.id,
    })));
  },
};

const actions = {
  fetchUsers({ commit }) {
    const usersData = this.$localStore.getData('users') || '[]';

    commit(SET_USERS, JSON.parse(usersData));
  },

  saveUsers({ state }) {
    this.$localStore.saveData('users', JSON.stringify(state.users));
  },

  saveMockUsers({ state, dispatch }) {
    if (state.users.length > 0) {
      return;
    }

    this.$localStore.saveData('users', JSON.stringify(mockUsers));
    dispatch('fetchUsers');
  },

  removeUsers({ commit }) {
    this.$localStore.removeData('users');
    commit('RESET_STATE');
  },
};

const mutations = {
  [RESET_STATE](state) {
    Object.assign(state, setupState());
  },

  [SET_USERS](state, payload) {
    state.users = payload;
  },

  [ADD_EMPLOY](state, { user, parentId }) {
    const employ = {
      id: user.id,
      name: user.name,
      phone: user.phone,
      employees: [],
    };

    if (parentId) {
      let boss = null;

      for (const user of state.users) {
        boss = getUserById(parentId, user);

        if (boss) {
          boss.employees.push(employ);
          break;
        }
      }
    } else {
      state.users.push(employ);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
