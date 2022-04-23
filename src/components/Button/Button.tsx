import { ReactNode } from 'react'
import { css } from '@emotion/react'

type ButtonProps = JSX.IntrinsicElements['button']

export interface Props extends ButtonProps {
  children: ReactNode
  priority?: 'primary' | 'secondary'
}

export const Button = ({ priority = 'primary', children }: Props) => {
  return (
    <button type='button' css={[styles.button, styles[priority]]}>
      {children}
    </button>
  )
}

const styles = {
  button: css`
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    font-size: var(--font-size-2xl);
    font-weight: 700;
    line-height: 1.5;
    padding: 16px 28px;
  `,
  primary: css`
    background-color: #f00;
    color: var(--color-gray-on-primary);
  `,
  secondary: css`
    background-color: var(--color-gray-background);
    box-shadow: #f00 0 0 0 2px inset;
    color: var(--color-text-primary);
  `,
}
