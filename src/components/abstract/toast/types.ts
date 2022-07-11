export interface ToastOptions {
  message: string
  duration?: number
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toast: (options: string | ToastOptions) => void
  }
}
