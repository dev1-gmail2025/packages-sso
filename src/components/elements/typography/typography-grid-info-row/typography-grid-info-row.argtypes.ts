import type { ArgTypes } from '@storybook/react';
import { TypographyGridInfoRowProps } from './typography-grid-info-row.component';

export const typographyGridInfoRowArgTypes: Partial<ArgTypes<TypographyGridInfoRowProps>> = {
  label: {
    control: 'text',
    description: 'Label text.',
    table: { type: { summary: 'string' } },
  },
  value: {
    control: 'text',
    description: 'Value node (string shown in controls).',
    table: { type: { summary: 'ReactNode' } },
  },
  columns: {
    control: 'text',
    description: 'Grid template columns (vertical layout only).',
    table: { type: { summary: 'string' }, defaultValue: { summary: '1fr 2fr' } },
  },
  layout: {
    control: 'inline-radio',
    options: ['horizontal', 'vertical'],
    description: 'Layout style.',
    table: { type: { summary: "'horizontal' | 'vertical'" }, defaultValue: { summary: 'vertical' } },
  },
  sx: { control: false },
  sxValue: { control: false },
  sxLabel: { control: false },
  lineLimit: { control: false },
};

