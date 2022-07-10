import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const { VITE_MOFISH_URL } = loadEnv(mode, process.cwd())

  return defineConfig({
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      open: true,
      proxy: {
        '/mofish': {
          target: VITE_MOFISH_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/mofish/, '')
        }
      }
    },
    plugins: [
      vue(),
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
