import { render, createVNode, type App } from 'vue'
import { ToastOptions } from './types'
import UIToast from './toast.vue'

const Toast = (options: string | ToastOptions) => {
  const mergeOptions: ToastOptions = {
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
  app.config.globalProperties.$toast = Toast
}

export default Toast
export { Toast }
