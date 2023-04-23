import { StoryObj, Meta } from '@storybook/react'

import { Textfield } from './Textfield'

const meta: Meta<typeof Textfield> = {
  title: 'Textfield',
  component: Textfield,
  args: {
    disabled: false,
    label: 'Label',
    placeholder: 'placeholder',
  },
}
export default meta

export const Default: StoryObj<typeof Textfield> = {}
