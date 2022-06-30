import { createApp } from 'vue'

import router from './router/index'

import App from './App.vue'

import './assets/style/minireset.css'

createApp(App).use(router).mount('#app')
