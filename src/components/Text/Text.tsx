import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'
import styles from './Text.module.css'

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
      className={`${styles[size]} ${styles[`${bold ? 'bold' : 'normal'}`]}`}
      {...elementProps}
    >
      {children}
    </Component>
  )
}
