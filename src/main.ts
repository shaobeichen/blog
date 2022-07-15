import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

import toast from '@/components/abstract/toast/toast'
import button from '@/components/abstract/button/button'

const app = createApp(App)

app.use(router)
app.use(toast)
app.use(button)

app.mount('#app')
