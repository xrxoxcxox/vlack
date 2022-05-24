import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Button',
  args: {
    children: 'Click me',
    disabled: false,
  },
  component: Button,
} as ComponentMeta<typeof Button>

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    priority: 'primary',
  },
}

export const Secondary: ComponentStoryObj<typeof Button> = {
  args: {
    priority: 'secondary',
  },
}
