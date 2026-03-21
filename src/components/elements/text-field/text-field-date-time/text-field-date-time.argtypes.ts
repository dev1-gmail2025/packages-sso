import type { ArgTypes } from '@storybook/react';

import type { TextFieldDateTimeElementProps } from './text-field-date-time.element';

export const textFieldDateTimeArgTypes: Partial<ArgTypes<TextFieldDateTimeElementProps>> = {
  name: {
    control: 'text',
    description: 'Field name passed in change payload.',
    table: { type: { summary: 'string' } },
  },
  label: {
    control: 'text',
    description: 'Label text.',
    table: { type: { summary: 'string' } },
  },
  iconLabel: {
    control: 'text',
    description: 'Icon name used by the label.',
    table: { type: { summary: 'string' } },
  },
  icon: {
    control: 'text',
    description: 'Calendar icon shown in DateTimePicker.',
    table: { type: { summary: 'string' } },
  },
  value: {
    control: false,
    description: 'DateTimePicker value handled as DateTimePicker internal type.',
    table: { type: { summary: 'any' } },
  },
  format: {
    control: 'text',
    description: 'DateTime display format.',
    table: { type: { summary: 'string' } },
  },
  disablePast: {
    control: 'boolean',
    description: 'Disable selecting past dates.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  disableFuture: {
    control: 'boolean',
    description: 'Disable selecting future dates.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  dateRangeInDays: {
    control: 'number',
    description: 'If set, DateTimePicker maxDate is now + dateRangeInDays (dayjs).',
    table: { type: { summary: 'number | undefined' } },
  },
  required: {
    control: 'boolean',
    description: 'Show required star on label.',
    table: { type: { summary: 'boolean | undefined' } },
  },
  error: {
    control: 'text',
    description: 'Error state: truthy enables error styling.',
    table: { type: { summary: 'string | boolean | undefined' } },
  },
  helperText: {
    control: 'text',
    description: 'Helper text shown below the picker (or `error` if helperText missing).',
    table: { type: { summary: 'string | undefined' } },
  },
  onChange: { action: 'changed', description: 'Called on accept: { target: { name, value } }.' },
  sx: { control: false },
  onBlur: { action: 'blurred' },
  minDate: { control: false },
  maxDate: { control: false },
};

