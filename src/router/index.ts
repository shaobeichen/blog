import { createRouter, createWebHashHistory } from 'vue-router'

import index from '../pages/index.vue'

const routes = [{ path: '/', component: index }]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
