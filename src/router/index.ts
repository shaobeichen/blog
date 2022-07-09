import { createRouter, createWebHashHistory } from 'vue-router'

import index from '../pages/index.vue'
import todolist from '../pages/todolist.vue'
import mofish from '../pages/mofish.vue'

const routes = [
  { path: '/', component: index },
  { path: '/todolist', component: todolist },
  { path: '/mofish', component: mofish }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

export default router
