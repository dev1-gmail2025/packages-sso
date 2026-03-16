import type { ArgTypes } from '@storybook/react';
import { CheckboxElementProps } from './check-box.element';

export const checkboxArgTypes: Partial<ArgTypes<CheckboxElementProps>> = {
  label: {
    control: 'text',
    description: 'Label displayed next to the checkbox.',
    table: {
      type: { summary: 'string' },
    },
  },
  checked: {
    control: 'boolean',
    description: 'If true, the checkbox is checked.',
    table: {
      type: { summary: 'boolean' },
    },
  },
  disabled: {
    control: 'boolean',
    description: 'If true, the checkbox is disabled.',
    table: {
      type: { summary: 'boolean' },
    },
  },
  indeterminate: {
    control: 'boolean',
    description: 'If true, the checkbox appears indeterminate.',
    table: {
      type: { summary: 'boolean' },
    },
  },
  size: {
    control: 'select',
    options: ['small', 'medium'],
    description: 'The size of the checkbox.',
    table: {
      type: { summary: '"small" | "medium"' },
      defaultValue: { summary: 'small' },
    },
  },
  color: {
    control: 'select',
    options: ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'default'],
    description: 'The color of the checkbox.',
    table: {
      type: { summary: 'CheckboxElementProps["color"]' },
      defaultValue: { summary: 'primary' },
    },
  },
  name: {
    control: 'text',
    description: 'Name attribute of the checkbox input.',
    table: {
      type: { summary: 'string' },
    },
  },
  sx: {
    control: false,
    description: 'Custom styles for the checkbox.',
    table: {
      type: { summary: 'SxProps<Theme>' },
    },
  },
  onChange: {
    action: 'changed',
    description: 'Callback fired when the checked state is changed.',
    table: {
      type: { summary: '(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void' },
    },
  },
};
