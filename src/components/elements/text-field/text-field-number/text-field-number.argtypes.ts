import type { ArgTypes } from '@storybook/react';
import type { TextFieldNumberElementProps } from './text-field-number.element';

export const textFieldNumberArgTypes: Partial<ArgTypes<TextFieldNumberElementProps>> = {
  name: {
    control: 'text',
    description: 'Field name returned in change payload.',
    table: { type: { summary: 'string' } },
  },
  label: {
    control: 'text',
    description: 'Label text rendered by TextFieldLabelElement.',
    table: { type: { summary: 'string | ReactNode' } },
  },
  iconLabel: {
    control: 'text',
    description: 'Material icon name displayed next to the label.',
    table: { type: { summary: 'string' } },
  },
  placeholder: {
    control: 'text',
    description: 'Placeholder text.',
    table: { type: { summary: 'string' } },
  },
  value: {
    control: false,
    description: 'Controlled numeric value. Stories manage this via internal state.',
    table: { type: { summary: 'any' } },
  },
  decimalScale: {
    control: { type: 'number', min: 0, max: 6, step: 1 },
    description: 'Max digits after decimal separator.',
    table: { type: { summary: 'number' } },
  },
  showResetButton: {
    control: 'boolean',
    description: 'If true and value is set, shows a reset icon button.',
    table: { type: { summary: 'boolean' } },
  },
  required: {
    control: 'boolean',
    description: 'Marks label required.',
    table: { type: { summary: 'boolean' } },
  },
  disabled: {
    control: 'boolean',
    description: 'Disable input.',
    table: { type: { summary: 'boolean' } },
  },
  error: {
    control: 'text',
    description: 'Error message (truthy triggers error state).',
    table: { type: { summary: 'any' } },
  },
  helperText: {
    control: 'text',
    description: 'Helper text shown below the input.',
    table: { type: { summary: 'ReactNode' } },
  },
  isAllowed: {
    control: false,
    description: 'react-number-format guard to allow/reject next value.',
    table: { type: { summary: '(values: any) => boolean' } },
  },
  onChange: {
    action: 'changed',
    description: 'Called with shape { target: { name, value } } where value is a number | undefined.',
    table: { type: { summary: '(eventLike: { target: { name?: string; value: any } }) => void' } },
  },
  onReset: {
    action: 'reset',
    description: 'Called when reset button clicked.',
    table: { type: { summary: '() => void' } },
  },
  InputProps: { control: false },
  sx: { control: false },
};

