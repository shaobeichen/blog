import { createRouter, createWebHashHistory } from 'vue-router'

import index from '../pages/index.vue'
import todolist from '../pages/todolist.vue'

const routes = [
  { path: '/', component: index },
  { path: '/todolist', component: todolist }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
