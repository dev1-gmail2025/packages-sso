import type { ArgTypes } from '@storybook/react';
import type { BreadcrumbsProps } from './bread-cumbs';

export const breadCumbsArgTypes: Partial<ArgTypes<BreadcrumbsProps>> = {
  content: {
    control: 'text',
    description: 'Breadcrumb title.',
    table: { type: { summary: 'string' } },
  },
  showBackButton: {
    control: 'boolean',
    description: 'Show back arrow button.',
    table: { type: { summary: 'boolean' } },
  },
  onBack: {
    action: 'back',
    description: 'Optional custom back handler. If not provided, uses navigate(-1).',
    table: { type: { summary: '() => void' } },
  },
  sxLabel: { control: false },
};
