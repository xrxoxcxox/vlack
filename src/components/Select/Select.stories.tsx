import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { Select } from './Select'

export default {
  title: 'Select',
  component: Select,
  args: {
    disabled: false,
    label: 'Label',
  },
} as ComponentMeta<typeof Select>

const options = [
  { label: 'not set', value: '', disabled: true },
  { label: 'option 1', value: 1 },
  { label: 'option 2', value: 2 },
  { label: 'option 3', value: 3 },
]

export const Default: ComponentStoryObj<typeof Select> = {
  args: {
    options: options,
    defaultValue: '',
  },
}
