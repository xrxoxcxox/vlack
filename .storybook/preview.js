import { Fragment } from 'react'
import { Global } from '@emotion/react'
import { root } from '../src/foundations/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Fragment>
      <Global styles={root} />
      <Story />
    </Fragment>
  ),
]
