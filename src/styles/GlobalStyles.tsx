import { css, Global } from '@emotion/react'
import { root } from './tokens'

const base = css({
  body: {
    color: 'var(--color-gray-90)',
    lineHeight: 'var(--line-height-m)',
  },
})

export const GlobalStyles = () => <Global styles={[root, base]} />
