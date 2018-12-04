import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const THEME_TYPE = 'THEME_TYPE';//主题类型

const state = {
  themeType: '',
  githubToken: ['f1b815b677693c7e431e', '10c9ee46e63ecc5f876d'], 
}

const mutations = {
  [THEME_TYPE](state, payload) {
    state.themeType = payload.themeType;
  }
}

const actions = {
  changeThemeType({commit}, data) {
    commit(
      THEME_TYPE,
      {
        themeType: data
      });
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions
})
