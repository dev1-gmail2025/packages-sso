import type { Preview } from '@storybook/react';
import React from 'react';

import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize({
  onUnhandledRequest: 'bypass',
});

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      pauseAnimationAtEnd: true,
      viewports: [375, 1440],
    },
  },
  decorators: [
    mswDecorator,
    (Story) =>
      React.createElement(
        'div',{style: {animation: 'none', transition: 'none'},
        },
        React.createElement(Story),
      ),
  ],
};

export default preview;

