import { useId } from 'react'
import styles from './Textfield.module.css'
import { Text } from '../Text'

type Props = JSX.IntrinsicElements['input'] & {
  label?: string
  errorMessage?: string
}

export const Textfield = ({ label, errorMessage, ...props }: Props) => {
  const textfieldId = useId()
  const errorMessageId = useId()
  return (
    <div className={styles.wrapper}>
      {!!label && (
        <Text
          as='label'
          className={`${styles.label} ${!!errorMessage && styles.errorLabel}`}
          htmlFor={textfieldId}
        >
          {label}
        </Text>
      )}
      <input
        aria-errormessage={errorMessageId}
        aria-invalid={!!errorMessage}
        className={`${styles.input} ${!!errorMessage && styles.errorInput}`}
        id={textfieldId}
        placeholder={props.placeholder && props.placeholder}
        type={props.type ? props.type : 'text'}
        {...props}
      />
      {!!errorMessage && (
        <Text className={styles.errorMessage} id={errorMessageId}>
          {errorMessage}
        </Text>
      )}
    </div>
  )
}
