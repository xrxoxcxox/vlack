import styles from './Button.module.css'

type ButtonProps = JSX.IntrinsicElements['button']

export interface Props extends ButtonProps {
  children: string
  priority?: 'primary' | 'secondary'
}

export const Button = ({ children, priority = 'primary', ...props }: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[priority]}`}
      type={props.type ? props.type : 'button'}
      {...props}
    >
      {children}
    </button>
  )
}
