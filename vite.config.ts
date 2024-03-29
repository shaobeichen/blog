import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import eslintPlugin from 'vite-plugin-eslint'
import defineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const { VITE_MOFISH_REALITY_URL, VITE_MOFISH_LOCAL_URL } = loadEnv(mode, process.cwd())

  return defineConfig({
    base: './',
    logLevel: 'warn',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      open: true,
      proxy: {
        [VITE_MOFISH_LOCAL_URL]: {
          target: VITE_MOFISH_REALITY_URL,
          changeOrigin: true,
          rewrite: path => path.replace(VITE_MOFISH_LOCAL_URL, '')
        }
      }
    },
    plugins: [
      vue(),
      defineOptions(),
      eslintPlugin({
        include: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.vue', 'src/*.ts', 'src/*.js', 'src/*.vue']
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/style/variable.scss";`
        }
      }
    }
  })
}
