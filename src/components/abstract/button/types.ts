export type ButtonType = 'default' | 'primary' | 'success'

export interface buttonProps {
  type: {
    type: ButtonType
    default: 'default'
  }
  color: string
}
