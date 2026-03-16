import type { ArgTypes } from '@storybook/react';
import type { TypographyInfoRowProps } from './typography-info-row.component';

export const typographyInfoRowArgTypes: Partial<ArgTypes<TypographyInfoRowProps>> = {
  label: {
    control: 'text',
    description: 'Row label.',
    table: { type: { summary: 'ReactNode' } },
  },
  value: {
    control: 'text',
    description: 'Row value.',
    table: { type: { summary: 'ReactNode' } },
  },
  lineLimit: {
    control: { type: 'number', min: 1, max: 5, step: 1 },
    description: 'Clamp value to N lines.',
    table: { type: { summary: 'number' }, defaultValue: { summary: '1' } },
  },
  isColumn: {
    control: 'boolean',
    description: 'If true, stacks label/value vertically.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  sx: { control: false },
  labelSx: { control: false },
};

