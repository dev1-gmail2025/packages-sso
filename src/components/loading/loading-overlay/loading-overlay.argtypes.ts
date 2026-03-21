import type { ArgTypes } from '@storybook/react';
import type { LoadingOverlayProps } from './loading-overlay.component';

export const loadingOverlayArgTypes: Partial<ArgTypes<LoadingOverlayProps>> = {
  loading: {
    control: 'boolean',
    description: 'Show overlay.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  size: {
    control: 'select',
    options: ['small', 'medium', 'large'],
    description: 'Spinner size.',
    table: { type: { summary: '"large" | "small" | "medium"' }, defaultValue: { summary: 'medium' } },
  },
  color: {
    control: 'color',
    description: 'Spinner color override.',
    table: { type: { summary: 'string' } },
  },
  message: {
    control: 'text',
    description: 'Optional message under spinner.',
    table: { type: { summary: 'string' } },
  },
  showBackdrop: {
    control: 'boolean',
    description: 'Backdrop blur + white overlay.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
  },
  topOffset: {
    control: { type: 'number', min: 0, step: 1 },
    description: 'Offset from top (px).',
    table: { type: { summary: 'number' }, defaultValue: { summary: '0' } },
  },
  sx: { control: false },
};
