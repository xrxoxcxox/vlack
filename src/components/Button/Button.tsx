import { css } from '@emotion/react'

type ButtonProps = JSX.IntrinsicElements['button']

export interface Props extends ButtonProps {
  children: string
  priority?: 'primary' | 'secondary'
}

export const Button = ({ children, priority = 'primary', ...props }: Props) => {
  return (
    <button
      type={props.type ? props.type : 'button'}
      css={[styles.button, styles[priority]]}
      {...props}
    >
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
    font-size: var(--font-size-m);
    font-weight: 700;
    line-height: var(--line-height-m);
    padding: 8px 16px;
    transition: all 100ms ease-in-out;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  `,
  primary: css`
    background-color: var(--color-gray-primary);
    color: var(--color-gray-on-primary);
    @media (hover: hover) and (pointer: fine) {
      &:hover:not(:disabled) {
        background-color: var(--color-gray-primary-variant);
      }
    }
  `,
  secondary: css`
    background-color: var(--color-gray-background);
    box-shadow: var(--color-gray-secondary) 0 0 0 2px inset;
    color: var(--color-text-primary);
    @media (hover: hover) and (pointer: fine) {
      &:hover:not(:disabled) {
        background-color: var(--color-gray-background-variant);
        box-shadow: var(--color-gray-secondary-variant) 0 0 0 2px inset;
      }
    }
  `,
}
