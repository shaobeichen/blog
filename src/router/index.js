import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => {
        require(['../page/index.vue'], resolve);
      }
    },
    {
      path: '/',
      name: 'articleDetails',
      component: (resolve) => {
        require(['../page/index.vue'], resolve);
      }
    },

  ]
})
