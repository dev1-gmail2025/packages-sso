import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

import logo from '../src/assets/logo/logo-main.svg';

const theme = create({
  base: 'light',
  brandTitle: 'MATERIAL SEVAGO SSO',
  brandImage: logo,
  brandUrl: '/',
});

addons.setConfig({ theme });

