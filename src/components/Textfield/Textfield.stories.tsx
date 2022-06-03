import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { Textfield } from './Textfield'

export default {
  title: 'Textfield',
  component: Textfield,
  args: {
    disabled: false,
    label: 'Label',
    placeholder: 'placeholder',
  },
} as ComponentMeta<typeof Textfield>

export const Default: ComponentStoryObj<typeof Textfield> = {}
