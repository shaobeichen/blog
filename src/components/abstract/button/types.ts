import type { ButtonHTMLAttributes } from 'vue'

export type ButtonType = 'default' | 'primary' | 'success'

export type ButtonSize = 'normal' | 'large' | 'small'

export interface BaseButtonProps {
  type?: {
    type: ButtonType
    default: 'default'
  }
  size?: {
    type: string
    default: 'normal'
  }
  disabled?: boolean
}

export type ButtonProps = BaseButtonProps & ButtonHTMLAttributes
