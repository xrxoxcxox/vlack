import { StoryObj, Meta } from '@storybook/react'

import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  args: {
    as: 'span',
    children: 'This is a Text component.',
    bold: false,
  },
}
export default meta

export const Default: StoryObj<typeof Text> = {}
