import { css } from '@emotion/react'
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
    <div css={styles.wrapper}>
      {!!label && (
        <Text
          as='label'
          css={[styles.label, !!errorMessage && styles.errorLabel]}
          htmlFor={selectId}
        >
          {label}
        </Text>
      )}
      <div css={styles.selectWrapper}>
        <select
          aria-errormessage={errorMessageId}
          aria-invalid={!!errorMessage}
          css={[styles.select, errorMessage && styles.errorSelect]}
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
          css={styles.selectArrow}
        >
          <path d='M7.29289 7.29289L2.70711 2.70711C2.31658 2.31658 1.68342 2.31658 1.29289 2.70711L0.707107 3.29289C0.316583 3.68342 0.316582 4.31658 0.707106 4.70711L7.29289 11.2929C7.68342 11.6834 8.31658 11.6834 8.70711 11.2929L15.2929 4.70711C15.6834 4.31658 15.6834 3.68342 15.2929 3.29289L14.7071 2.70711C14.3166 2.31658 13.6834 2.31658 13.2929 2.70711L8.70711 7.29289C8.31658 7.68342 7.68342 7.68342 7.29289 7.29289Z' />
        </svg>
      </div>
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
  selectWrapper: css({
    display: 'flex',
    position: 'relative',
  }),
  select: css({
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    borderColor: 'var(--color-gray-30)',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'currentcolor',
    flexGrow: 1,
    fontSize: 'var(--font-size-m)',
    lineHeight: 'var(--line-height-m)',
    padding: '8px 40px 8px 16px',
    '&:disabled': {
      backgroundColor: 'var(--color-gray-20)',
      borderColor: 'transparent',
      color: 'var(--color-gray-60)',
      cursor: 'not-allowed',
    },
  }),
  selectArrow: css({
    bottom: 0,
    color: 'var(--color-text-medium-emphasis)',
    margin: 'auto',
    pointerEvents: 'none',
    position: 'absolute',
    right: 12,
    top: 0,
  }),
  errorSelect: css({
    borderColor: 'var(--color-red)',
  }),
  errorMessage: css({
    color: 'var(--color-red)',
    fontSize: 'var(--font-size-xs)',
    marginTop: 4,
  }),
}
