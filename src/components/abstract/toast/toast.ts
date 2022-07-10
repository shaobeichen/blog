import { render, createVNode, type App } from 'vue'
import UIToast from './toast.vue'
import { options } from '@/types/components/toast'

const Toast = (options: string | options) => {
  const mergeOptions: options = {
    message: '',
    duration: 2000
  }

  if (typeof options === 'string') mergeOptions.message = options
  else Object.assign(mergeOptions, options)

  const mountNode = document.createElement('div')
  const ToastBox = createVNode(UIToast, {
    ...mergeOptions,
    closeToast: () => {
      mountNode.parentNode?.removeChild(mountNode)
    }
  })
  render(ToastBox, mountNode)
  document.body.appendChild(mountNode)
}

Toast.install = (app: App) => {
  app.component('toast', UIToast)
  app.provide('$toast', Toast)
  // TODO 可以在Options API中使用this.$toast，但是会提示"不存在属性$toast"
  app.config.globalProperties.$toast = Toast
}

export default Toast
export { Toast }
