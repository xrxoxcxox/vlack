import { useId } from 'react'
import { Text } from '../Text'

type InputProps = JSX.IntrinsicElements['input']

export interface Props extends InputProps {
  label?: string
  errorMessage?: string
}

export const Textfield = ({ label, errorMessage, ...props }: Props) => {
  const textfieldId = useId()
  const errorMessageId = useId()
  return (
    <div>
      {!!label && (
        <Text
          as='label'
          htmlFor={textfieldId}
        >
          {label}
        </Text>
      )}
      <input
        aria-errormessage={errorMessageId}
        aria-invalid={!!errorMessage}
        id={textfieldId}
        placeholder={props.placeholder && props.placeholder}
        type={props.type ? props.type : 'text'}
        {...props}
      />
      {!!errorMessage && (
        <Text id={errorMessageId}>
          {errorMessage}
        </Text>
      )}
    </div>
  )
}
