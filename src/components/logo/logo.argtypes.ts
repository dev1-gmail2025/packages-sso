import type { ArgTypes } from '@storybook/react';
import type { LogoComponentProps } from './logo.component';

export const logoArgTypes: Partial<ArgTypes<LogoComponentProps>> = {
  env: {
    control: 'select',
    options: ['local', 'develop', 'staging', 'production', 'production_vps'],
    description: 'Target environment for logo link (SSO url).',
    table: { type: { summary: 'Environment' } },
  },
  url: {
    control: 'text',
    description: 'Logo image url.',
    table: { type: { summary: 'string' } },
  },
  height: {
    control: { type: 'number', min: 16, max: 120, step: 1 },
    description: 'Logo height (px).',
    table: { type: { summary: 'number' } },
  },
  sx: { control: false },
};

