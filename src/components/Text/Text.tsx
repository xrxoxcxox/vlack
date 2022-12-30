import { css } from '@emotion/react'
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'

type TextProps<C extends ElementType> = {
  as?: C
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl'
  bold?: boolean
}

type Props<C extends ElementType> = PropsWithChildren<TextProps<C>> &
  Omit<ComponentPropsWithoutRef<C>, keyof TextProps<C>>

export const Text = <C extends ElementType = 'span'>({
  children,
  as,
  size = 'm',
  bold = false,
  ...elementProps
}: Props<C>) => {
  const Component = as || 'span'
  return (
    <Component
      css={[styles[size], styles[`${bold ? 'bold' : 'normal'}`]]}
      {...elementProps}
    >
      {children}
    </Component>
  )
}

const styles = {
  xs: css({
    fontSize: 'var(--font-size-xs)',
  }),
  s: css({
    fontSize: 'var(--font-size-s)',
  }),
  m: css({
    fontSize: 'var(--font-size-m)',
  }),
  l: css({
    fontSize: 'var(--font-size-l)',
  }),
  xl: css({
    fontSize: 'var(--font-size-xl)',
  }),
  '2xl': css({
    fontSize: 'var(--font-size-2xl)',
  }),
  '3xl': css({
    fontSize: 'var(--font-size-3xl)',
  }),
  '4xl': css({
    fontSize: 'var(--font-size-4xl)',
  }),
  normal: css({
    fontWeight: 400,
  }),
  bold: css({
    fontWeight: 700,
  }),
}
