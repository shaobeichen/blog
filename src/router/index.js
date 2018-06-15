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
      path: '/blog',
      name: 'blog',
      component: (resolve) => {
        require(['../page/blog.vue'], resolve);
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: (resolve) => {
        require(["../page/detail.vue"], resolve);
      }
    },
    {
      path: '/about',
      name: 'about',
      component: (resolve) => {
        require(['../page/about.vue'], resolve);
      }
    }

  ]
})
