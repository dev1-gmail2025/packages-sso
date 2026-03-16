import type { ArgTypes } from '@storybook/react';
import type { TextFieldElementProps } from './text-field.element';

export const textFieldArgTypes: Partial<ArgTypes<TextFieldElementProps>> = {
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
    control: 'text',
    description: 'Controlled value. In stories we manage this via state.',
    table: { type: { summary: 'any' } },
  },
  description: {
    control: 'text',
    description: 'Optional note shown below the field.',
    table: { type: { summary: 'string | null' } },
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
  rows: {
    control: { type: 'number', min: 1, max: 10, step: 1 },
    description: 'If set, enables multiline.',
    table: { type: { summary: 'number' } },
  },
  onChange: {
    action: 'changed',
    description: 'Called with shape { target: { name, value } }.',
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

