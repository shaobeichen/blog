import type { ExtractPropTypes } from 'vue'

export const buttonTypes = ['default', 'primary', 'success']

export const buttonSizes = ['normal', 'large', 'small']

export const buttonProps = {
  type: {
    type: String,
    values: buttonTypes,
    default: 'default'
  },
  size: {
    type: String,
    values: buttonSizes,
    default: 'normal'
  },
  disabled: Boolean
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
