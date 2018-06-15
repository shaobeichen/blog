import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const THEME_TYPE = 'THEME_TYPE';//主题类型

const state = {
  themeType: '',
  githubToken: ['0f6560744b42121c3180d5', '0684ff2aad37cc36fd'],
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
