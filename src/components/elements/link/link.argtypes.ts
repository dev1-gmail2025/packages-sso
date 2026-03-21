import type { ArgTypes } from '@storybook/react';
import type { LinkElementProps } from './link.element';

export const linkArgTypes: Partial<ArgTypes<LinkElementProps>> = {
  children: {
    control: 'text',
    description: 'Link content.',
    table: { type: { summary: 'ReactNode' } },
  },
  href: {
    control: 'text',
    description: 'Link href.',
    table: { type: { summary: 'string' } },
  },
  target: {
    control: 'select',
    options: ['_self', '_blank', '_parent', '_top'],
    description: 'Target attribute.',
    table: { type: { summary: 'string' }, defaultValue: { summary: '_self' } },
  },
  underline: {
    control: 'select',
    options: ['always', 'hover', 'none'],
    description: 'Underline behavior (MUI).',
    table: { type: { summary: '"always" | "hover" | "none"' } },
  },
  color: {
    control: 'text',
    description: 'MUI color prop (e.g. "primary", "inherit").',
    table: { type: { summary: 'any' } },
  },
  onClick: {
    action: 'clicked',
    description: 'If provided, stops propagation + prevents default and calls onClick().',
    table: { type: { summary: '() => void' } },
  },
  sx: { control: false },
};
