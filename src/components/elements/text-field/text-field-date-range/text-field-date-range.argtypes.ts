import type { ArgTypes } from '@storybook/react';
import type { ComponentProps } from 'react';

import { TextFieldDateRangeElement } from './text-field-date-range.element';

type TextFieldDateRangeElementProps = ComponentProps<typeof TextFieldDateRangeElement>;

export const textFieldDateRangeArgTypes: Partial<ArgTypes<TextFieldDateRangeElementProps>> = {
  fromDate: {
    control: 'text',
    description: 'From date in `YYYY-MM-DD` format (string).',
    table: { type: { summary: 'string' } },
  },
  toDate: {
    control: 'text',
    description: 'To date in `YYYY-MM-DD` format (string).',
    table: { type: { summary: 'string' } },
  },
  placeholder: {
    control: 'text',
    description: 'Placeholder text between the two pickers (component uses DatePicker format).',
    table: { type: { summary: 'string' } },
  },
  format: {
    control: 'text',
    description: 'Date display format.',
    table: { type: { summary: 'string' } },
  },
  disabled: {
    control: 'boolean',
    description: 'Disable both pickers.',
    table: { type: { summary: 'boolean' } },
  },
  minDate: { control: false },
  maxDate: { control: false },
  sx: { control: false },
  onFromDateChange: { action: 'fromDateChanged' },
  onToDateChange: { action: 'toDateChanged' },
  onDateRangeChange: { action: 'dateRangeChanged' },
};
