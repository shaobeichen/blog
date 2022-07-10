declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

// 环境变量类型定义
interface ImportMetaEnv {
  VITE_LOCAL_URL: string
  VITE_REALITY_URL: string
  VITE_BASE_URL: string
  VITE_MOFISH_LOCAL_URL: string
  VITE_MOFISH_REALITY_URL: string
  VITE_MOFISH_BASE_URL: string
}
