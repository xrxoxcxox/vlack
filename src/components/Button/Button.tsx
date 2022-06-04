import { css } from '@emotion/react'

type ButtonProps = JSX.IntrinsicElements['button']

export interface Props extends ButtonProps {
  children: string
  priority?: 'primary' | 'secondary'
}

export const Button = ({ children, priority = 'primary', ...props }: Props) => {
  return (
    <button
      css={[styles.button, styles[priority]]}
      type={props.type ? props.type : 'button'}
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
    borderStyle: 'solid',
    borderWidth: 2,
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
    backgroundColor: 'var(--color-gray-80)',
    borderColor: 'transparent',
    color: 'var(--color-gray-10)',
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover:not(:disabled)': {
        backgroundColor: 'var(--color-gray-90)',
        color: 'var(--color-gray-0)',
      },
    },
  }),
  secondary: css({
    backgroundColor: 'transparent',
    borderColor: 'var(--color-gray-50)',
    color: 'currentcolor',
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover:not(:disabled)': {
        borderColor: 'var(--color-gray-80)',
      },
    },
  }),
}
