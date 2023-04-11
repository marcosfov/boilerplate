import type { Meta, StoryObj } from '@storybook/react'

import Main from '.'

const meta = {
  title: 'Main',
  component: Main,
  tags: ['autodocs']
} as Meta<typeof Main>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => <Main {...args} />
}
Basic.args = {
  title: 'asijdfioajsdifj',
  description: 'asdhfoiasho'
}

export const Default: Story = {
  render: (args) => <Main {...args} />
}
Default.args = {
  title: '123',
  description: '456321'
}
