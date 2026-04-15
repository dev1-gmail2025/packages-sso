import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import type { Preview } from '@storybook/react';

import { initialize, mswDecorator } from 'msw-storybook-addon';
import { createElement, Fragment } from 'react';
import { Mode } from '../src/common';
import { getTheme } from '../src/common/utils/other.util';

// On GitHub Pages, service worker files are often missing/mis-path'd.
initialize({
  onUnhandledRequest: 'bypass',
  serviceWorker: { url: undefined },
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
      createElement(
        ThemeProvider,
        { theme: getTheme(Mode.LIGHT) },
        createElement(
          Fragment,
          null,
          createElement(CssBaseline),
          createElement('div', { style: { animation: 'none', transition: 'none' } }, createElement(Story)),
        ),
      ),
  ],
};

export default preview;
