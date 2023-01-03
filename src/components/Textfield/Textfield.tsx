import { css } from '@emotion/react'
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
    <div css={styles.wrapper}>
      {!!label && (
        <Text
          as='label'
          css={[styles.label, !!errorMessage && styles.errorLabel]}
          htmlFor={textfieldId}
        >
          {label}
        </Text>
      )}
      <input
        aria-errormessage={errorMessageId}
        aria-invalid={!!errorMessage}
        css={[styles.input, !!errorMessage && styles.errorInput]}
        id={textfieldId}
        placeholder={props.placeholder && props.placeholder}
        type={props.type ? props.type : 'text'}
        {...props}
      />
      {!!errorMessage && (
        <Text css={styles.errorMessage} id={errorMessageId}>
          {errorMessage}
        </Text>
      )}
    </div>
  )
}

const styles = {
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
  }),
  label: css({
    alignSelf: 'flex-start',
    color: 'var(--color-gray-60)',
    fontFamily: 'inherit',
    fontSize: 'var(--font-size-xs)',
    marginBottom: 4,
  }),
  errorLabel: css({
    color: 'var(--color-red)',
  }),
  input: css({
    backgroundColor: 'transparent',
    border: 'none',
    borderColor: 'var(--color-gray-30)',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'currentcolor',
    fontSize: 'var(--font-size-m)',
    lineHeight: 'var(--line-height-m)',
    padding: '8px 16px',
    '&:disabled': {
      backgroundColor: 'var(--color-gray-20)',
      borderColor: 'transparent',
      color: 'var(--color-gray-60)',
      cursor: 'not-allowed',
    },
  }),
  errorInput: css({
    borderColor: 'var(--color-red)',
  }),
  errorMessage: css({
    color: 'var(--color-red)',
    fontSize: 'var(--font-size-xs)',
    marginTop: 4,
  }),
}
