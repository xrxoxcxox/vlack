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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = 'm',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  bold = false,
  ...elementProps
}: Props<C>) => {
  const Component = as || 'span'
  return (
    <Component
      {...elementProps}
    >
      {children}
    </Component>
  )
}
