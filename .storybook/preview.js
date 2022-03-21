import { Fragment } from 'react'
import { GlobalStyle } from 'src/foundations/GlobalStyle.tsx'

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
      <GlobalStyle />
      <Story />
    </Fragment>
  ),
]
