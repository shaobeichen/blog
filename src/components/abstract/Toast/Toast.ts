import { createApp } from 'vue'
import UIToast from './Toast.vue'

interface options {
  message: string
  duration: number
}

const Toast = (options: string | options) => {
  const mergeOptions: options = {
    message: '',
    duration: 2000
  }

  if (typeof options === 'string') mergeOptions.message = options
  else Object.assign(mergeOptions, { ...options })

  const mountNode = document.createElement('div')
  const ToastBox = createApp(UIToast, {
    ...mergeOptions
  })
  ToastBox.mount(mountNode)
}
export { Toast }
