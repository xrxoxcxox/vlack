import { css } from '@emotion/react'
import { color } from '../../foundations/theme'

export interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles.primary : styles.secondary
  return (
    <button
      type='button'
      css={[styles.button, styles[size], mode]}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}

const styles = {
  button: css`
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    line-height: 1;
  `,
  primary: css`
    background-color: ${color.gray[100]};
    color: white;
  `,
  secondary: css`
    background-color: transparent;
    box-shadow: rgb(0 0 0 / 15%) 0 0 0 1px inset;
    color: #333;
  `,
  small: css`
    font-size: 12px;
    padding: 10px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 11px 20px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
}
