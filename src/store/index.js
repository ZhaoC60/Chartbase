import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topicId: '', //当前主题下标
    routerPath: '', // 当前主题路径
  },
  mutations: {
    setTopicId(state, ind) {
      state.topicId = ind;
    },
    setRouter(state, ind) {
      state.routerPath = ind;
    },
    setUpdataC(state, ind) {
      state.routerPath = ind;
    },
  },
  actions: {},
  modules: {},
});
