import { Fragment } from 'react'
import { GlobalStyles } from '../src/styles/GlobalStyles'

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
      <GlobalStyles />
      <Story />
    </Fragment>
  ),
]
