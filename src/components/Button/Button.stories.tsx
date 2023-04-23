import { StoryObj, Meta } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Click me',
    disabled: false,
  },
}
export default meta

export const Primary: StoryObj<typeof Button> = {
  args: {
    priority: 'primary',
  },
}

export const Secondary: StoryObj<typeof Button> = {
  args: {
    priority: 'secondary',
  },
}
