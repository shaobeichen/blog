import { render, createVNode, type App } from 'vue'
import UIToast from './toast.vue'
import { ToastProps } from './types'

const Toast = (props: string | ToastProps) => {
  const mergeProps: ToastProps = {
    message: '',
    duration: 2000,
    closeToast: () => ({})
  }

  if (typeof props === 'string') mergeProps.message = props
  else Object.assign(mergeProps, props)

  const mountNode = document.createElement('div')
  const ToastBox = createVNode(UIToast, {
    ...mergeProps,
    closeToast: () => {
      mountNode.parentNode?.removeChild(mountNode)
    }
  })
  render(ToastBox, mountNode)
  document.body.appendChild(mountNode)
}

Toast.install = (app: App) => {
  app.component('v-toast', UIToast)
  app.provide('$toast', Toast)
  app.config.globalProperties.$toast = Toast
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toast: (props: string | ToastProps) => void
  }
}

export default Toast
export { Toast }
