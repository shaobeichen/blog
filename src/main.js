import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
import store from "./store/store";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
