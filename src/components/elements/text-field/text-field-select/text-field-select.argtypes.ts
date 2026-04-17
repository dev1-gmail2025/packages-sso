import type { ArgTypes } from '@storybook/react';
import type { TextFieldSelectElementProps } from './text-field-select.element';

export const textFieldSelectArgTypes: Partial<ArgTypes<TextFieldSelectElementProps>> = {
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
  options: {
    control: 'object',
    description: 'Select options (supports either primitives or { label, value, url }).',
    table: { type: { summary: 'any[]' } },
  },
  placeholder: {
    control: 'text',
    description: 'Placeholder text.',
    table: { type: { summary: 'string' } },
  },
  value: {
    control: false,
    description: 'Controlled value. Stories manage this via internal state.',
    table: { type: { summary: 'any' } },
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
  multiple: {
    control: 'boolean',
    description: 'Enable multiple selection (value becomes an array).',
    table: { type: { summary: 'boolean' } },
  },
  showAvatar: {
    control: 'boolean',
    description: 'If true, renders option with an avatar (expects option.url).',
    table: { type: { summary: 'boolean' } },
  },
  getOptionDisabled: {
    control: false,
    description: 'Disable certain options.',
    table: { type: { summary: '(option: any) => boolean' } },
  },
  renderValue: {
    control: false,
    description: 'Custom render for selected value.',
    table: { type: { summary: '(selected: any) => ReactNode' } },
  },
  openTest: {
    control: 'boolean',
    description: 'Story/test helper to force dropdown open initially.',
    table: { type: { summary: 'boolean' } },
  },
  onChange: {
    action: 'changed',
    description: 'Called with shape { target: { name, value } }.',
    table: { type: { summary: '(eventLike: { target: { name?: string; value: any } }) => void' } },
  },
  sx: { control: false },
};
