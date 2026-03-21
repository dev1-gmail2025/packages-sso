import type { ArgTypes } from '@storybook/react';
import { TextFieldDateElementProps } from './text-field-date.element';

export const textFieldDateArgTypes: Partial<ArgTypes<TextFieldDateElementProps>> = {
  name: {
    control: 'text',
    description: 'Field name returned in onChange payload.',
    table: { type: { summary: 'string' } },
  },
  label: {
    control: 'text',
    description: 'Label text.',
    table: { type: { summary: 'string' } },
  },
  iconLabel: {
    control: 'text',
    description: 'Optional icon for label.',
    table: { type: { summary: 'string' } },
  },
  value: {
    control: false,
    description: 'Date value passed to DatePicker.',
    table: { type: { summary: 'any' } },
  },
  format: {
    control: 'text',
    description: 'Date display format.',
    table: { type: { summary: 'string' }, defaultValue: { summary: 'DD/MM/YYYY' } },
  },
  disablePast: {
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  disableFuture: {
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  dateRangeInDays: {
    control: 'number',
    table: { type: { summary: 'number | undefined' } },
  },
  required: {
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  error: {
    control: 'text',
    table: { type: { summary: 'unknown' } },
  },
  helperText: {
    control: 'text',
    table: { type: { summary: 'string | undefined' } },
  },
  onChange: { action: 'changed' },
  onBlur: { action: 'blurred' },
  sx: { control: false },
  minDate: { control: false },
  maxDate: { control: false },
};

