import type { ArgTypes } from '@storybook/react';
import type { ComponentProps } from 'react';
import { TextFieldEmailAutocomplete } from './text-field-email-autocomplete.element';

type TextFieldEmailAutocompleteProps = ComponentProps<typeof TextFieldEmailAutocomplete>;

export const textFieldEmailAutocompleteArgTypes: Partial<ArgTypes<TextFieldEmailAutocompleteProps>> = {
  name: {
    control: 'text',
    description: 'Input name returned in change payload.',
    table: { type: { summary: 'string' } },
  },
  label: {
    control: 'text',
    description: 'Label displayed by TextFieldLabelElement.',
    table: { type: { summary: 'string | undefined' } },
  },
  placeholder: {
    control: 'text',
    description: 'Placeholder text inside input.',
    table: { type: { summary: 'string | undefined' } },
  },
  iconLabel: {
    control: 'text',
    description: 'Icon label used by TextFieldLabelElement.',
    table: { type: { summary: 'string | undefined' } },
  },
  value: {
    control: false,
    description: 'Selected email list (controlled in stories).',
    table: { type: { summary: 'string[]' } },
  },
  disabled: {
    control: 'boolean',
    description: 'Disable the whole input.',
    table: { type: { summary: 'boolean' } },
  },
  helperText: { control: 'text' },
  sx: { control: false },
  sxInput: { control: false },
  onChange: { action: 'changed', description: 'Returns { target: { name, value } } with `value: string[]`.' },
  onRemove: { action: 'removeClicked' },
  showRemove: { control: 'boolean', table: { type: { summary: 'boolean | undefined' } } },
};
