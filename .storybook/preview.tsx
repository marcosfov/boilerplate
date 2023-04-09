import React from 'react'
import type { Preview } from '@storybook/react'
import GlobalStyles from '../src/styles/global'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <GlobalStyles />
        <Story />
      </>
    )
  ]
}

export default preview
