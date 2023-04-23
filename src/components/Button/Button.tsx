import styles from './Button.module.css'

type Props = JSX.IntrinsicElements['button'] & {
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
