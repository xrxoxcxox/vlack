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
  button: css({
    border: 0,
    borderRadius: 8,
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 'var(--font-size-m)',
    fontWeight: 700,
    lineHeight: 'var(--line-height-m)',
    padding: '8px 16px',
    transition: 'all 100ms ease-in-out',
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.4,
    },
  }),
  primary: css({
    backgroundColor: 'var(--color-gray-primary)',
    color: 'var(--color-gray-on-primary)',
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover:not(:disabled)': {
        backgroundColor: 'var(--color-gray-primary-variant)',
      },
    },
  }),
  secondary: css({
    backgroundColor: 'var(--color-gray-background)',
    boxShadow: 'var(--color-gray-secondary) 0 0 0 2px inset',
    color: 'var(--color-text-primary)',
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover:not(:disabled)': {
        backgroundColor: 'var(--color-gray-background-variant)',
        boxShadow: 'var(--color-gray-secondary-variant) 0 0 0 2px inset',
      },
    },
  }),
}
