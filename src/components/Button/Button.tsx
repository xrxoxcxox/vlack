import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { color, fontSize } from 'src/foundations/tokens'

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
    font-size: ${fontSize.m};
    font-weight: 700;
    line-height: 1.5;
    padding: 8px 16px;
  `,
  primary: css`
    background-color: ${color.gray.primary};
    color: ${color.gray.onPrimary};
  `,
  secondary: css`
    background-color: ${color.gray.background};
    box-shadow: ${color.gray.secondary} 0 0 0 2px inset;
    color: ${color.text.primary};
  `,
}
