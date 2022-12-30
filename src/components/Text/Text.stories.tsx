import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { Text } from './Text'

export default {
  title: 'Text',
  component: Text,
  args: {
    as: 'span',
    children: 'This is a Text component.',
    bold: false,
  },
} as ComponentMeta<typeof Text>

export const Default: ComponentStoryObj<typeof Text> = {}
