import type { ArgTypes } from '@storybook/react';
import type { RadioElementProps } from './radio.element';

export const radioArgTypes: Partial<ArgTypes<RadioElementProps>> = {
  label: {
    control: 'text',
    description: 'Label displayed next to the radio.',
    table: { type: { summary: 'ReactNode' } },
  },
  name: {
    control: 'text',
    description: 'Name attribute applied to the underlying input.',
    table: { type: { summary: 'string' } },
  },
  color: {
    control: 'select',
    options: ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'default'],
    description: 'MUI color prop.',
    table: { type: { summary: 'RadioProps["color"]' } },
  },
  disabled: {
    control: 'boolean',
    description: 'If true, the radio is disabled.',
    table: { type: { summary: 'boolean' } },
  },
  checked: {
    control: 'boolean',
    description: 'If true, the radio is checked.',
    table: { type: { summary: 'boolean' } },
  },
  sx: { control: false },
};

