import { type ExtractPropTypes } from 'vue'

export const toastProps = {
  message: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 2000
  },
  closeToast: {
    type: Function,
    default: () => ({})
  }
}

export type ToastProps = ExtractPropTypes<typeof toastProps>
