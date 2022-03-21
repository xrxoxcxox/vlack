import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
)

export const Basic = Template.bind({})
Basic.args = { children: 'Click me', priority: 'primary' }
