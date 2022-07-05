import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import Toast from './components/abstract/Toast/Toast'

const app = createApp(App)

app.use(router)
app.use(Toast)

app.mount('#app')
