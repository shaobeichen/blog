declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

interface ImportMetaEnv {
  VITE_BASE_URL: string
  VITE_BASE_LOCAL_URL: string
  VITE_MOFISH_URL: string
  VITE_MOFISH_LOCAL_URL: string
}
