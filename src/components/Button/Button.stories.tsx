import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    priority: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
)

export const Primary = Template.bind({})
Primary.args = { children: 'Click me', priority: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { children: 'Click me', priority: 'secondary' }
