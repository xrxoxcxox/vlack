type ButtonProps = JSX.IntrinsicElements['button']

export interface Props extends ButtonProps {
  children: string
  priority?: 'primary' | 'secondary'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Button = ({ children, priority = 'primary', ...props }: Props) => {
  return (
    <button
      type={props.type ? props.type : 'button'}
      {...props}
    >
      {children}
    </button>
  )
}
