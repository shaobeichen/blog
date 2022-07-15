import type { App } from 'vue'
import UIButton from './button.vue'

const Button = {
  install(app: App) {
    app.component('v-button', UIButton)
  }
}

export default Button
export { Button }
