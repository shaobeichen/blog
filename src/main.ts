import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import App from './App.vue'

import toast from '@/components/abstract/toast/toast'
import button from '@/components/abstract/button/button'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(toast)
app.use(button)

app.mount('#app')
