import { StoryObj, Meta } from '@storybook/react'

import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  args: {
    disabled: false,
    label: 'Label',
  },
}
export default meta

const options = [
  { label: 'not set', value: '', disabled: true },
  { label: 'option 1', value: 1 },
  { label: 'option 2', value: 2 },
  { label: 'option 3', value: 3 },
]

export const Default: StoryObj<typeof Select> = {
  args: {
    options: options,
    defaultValue: '',
  },
}
