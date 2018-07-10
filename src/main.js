import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import store from "./store/store"

Vue.config.productionTip = false
Vue.prototype.$axios = axios
//为文章详情添加代码高亮
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
//为网站添加动态标题
Vue.directive('title', (el) => {
  if (el.dataset.title === undefined) {
    document.title = `等待中... | 小桥酒馆`;
  } else {
    document.title = `${el.dataset.title} | 小桥酒馆`;
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
