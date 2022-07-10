import { options } from '@/types/components/toast'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toast: (options: string | options) => void
  }
}
