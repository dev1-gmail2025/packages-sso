import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import { STORY_RENDERED } from '@storybook/core-events';

import logo from '../src/assets/logo/logo-main.svg';

const APP_TITLE = 'MATERIAL SEVAGO SSO';

const theme = create({
  base: 'light',
  brandTitle: APP_TITLE,
  brandImage: logo,
  brandUrl: '/',
});

addons.setConfig({ theme });

// Sync browser tab title + favicon with Storybook brand
if (typeof document !== 'undefined') {
  const applyBranding = () => {
    document.title = APP_TITLE;

    const existing = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    const link = existing ?? document.createElement('link');
    link.rel = 'icon';
    link.href = logo;

    if (!existing) {
      document.head.appendChild(link);
    }
  };

  applyBranding();

  // Storybook overrides document.title per story; keep re-applying
  addons.register('sevago/title-sync', (api) => {
    api.on(STORY_RENDERED, applyBranding);
  });
}

