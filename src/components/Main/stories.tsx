import { withKnobs, text } from '@storybook/addon-knobs'
import type { Meta, StoryObj } from '@storybook/react'

import Main from '.'

const meta = {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta<typeof Main>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Main
      title={text('Title', 'React Avançado')}
      description={text(
        'Description',
        'TypeScript, ReactJS, NextJS e Styled Components'
      )}
    />
  )
}

export const Secondary: Story = {
  render: () => (
    <Main
      title={text('Title', 'React Avançado123')}
      description={text(
        'Description',
        'TypeScript, ReactJS, NextJS e Styled Components'
      )}
    />
  )
}
