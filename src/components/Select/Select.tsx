import { useId } from 'react'
import { Text } from '../Text'

type SelectProps = JSX.IntrinsicElements['select']

type Props = SelectProps & {
  label?: string
  errorMessage?: string
  options: JSX.IntrinsicElements['option'][]
}

export const Select = ({ label, errorMessage, options, ...props }: Props) => {
  const selectId = useId()
  const errorMessageId = useId()
  return (
    <div>
      {!!label && (
        <Text
          as='label'
          htmlFor={selectId}
        >
          {label}
        </Text>
      )}
      <div>
        <select
          aria-errormessage={errorMessageId}
          aria-invalid={!!errorMessage}
          id={selectId}
          {...props}
        >
          {options.map(({ label, ...option }) => {
            return (
              <option {...option} key={label}>
                {label}
              </option>
            )
          })}
        </select>
        <svg
          width='16'
          height='12'
          viewBox='0 0 16 12'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M7.29289 7.29289L2.70711 2.70711C2.31658 2.31658 1.68342 2.31658 1.29289 2.70711L0.707107 3.29289C0.316583 3.68342 0.316582 4.31658 0.707106 4.70711L7.29289 11.2929C7.68342 11.6834 8.31658 11.6834 8.70711 11.2929L15.2929 4.70711C15.6834 4.31658 15.6834 3.68342 15.2929 3.29289L14.7071 2.70711C14.3166 2.31658 13.6834 2.31658 13.2929 2.70711L8.70711 7.29289C8.31658 7.68342 7.68342 7.68342 7.29289 7.29289Z' />
        </svg>
      </div>
      {!!errorMessage && (
        <Text id={errorMessageId}>
          {errorMessage}
        </Text>
      )}
    </div>
  )
}
