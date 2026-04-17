import type { ArgTypes } from '@storybook/react';
import type { TextFieldSelectSearchObjectElementProps } from './text-field-select-search-object.element';

export const textFieldSelectSearchObjectArgTypes: Partial<ArgTypes<TextFieldSelectSearchObjectElementProps>> = {
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
  colorLabel: {
    control: 'text',
    description: 'Label color.',
    table: { type: { summary: 'string' } },
  },
  placeholder: {
    control: 'text',
    description: 'Placeholder shown in the input.',
    table: { type: { summary: 'string' } },
  },
  options: {
    control: 'object',
    description: 'Autocomplete options.',
    table: { type: { summary: 'any[]' } },
  },
  multiple: {
    control: 'boolean',
    description: 'Enable multiple selection.',
    table: { type: { summary: 'boolean' } },
  },
  freeSolo: {
    control: 'boolean',
    description: 'Allow custom (not in options) values.',
    table: { type: { summary: 'boolean' } },
  },
  showAvatar: {
    control: 'boolean',
    description: 'If true, render option/tag with avatar (expects option.url).',
    table: { type: { summary: 'boolean' } },
  },
  maxDisplayTags: {
    control: { type: 'number', min: 0, max: 10, step: 1 },
    description: 'Maximum number of tags to display before showing +N chip.',
    table: { type: { summary: 'number' } },
  },
  loading: {
    control: 'boolean',
    description: 'Show loading state.',
    table: { type: { summary: 'boolean' } },
  },
  disabled: {
    control: 'boolean',
    description: 'Disable input.',
    table: { type: { summary: 'boolean' } },
  },
  required: {
    control: 'boolean',
    description: 'Marks label required.',
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
  value: {
    control: false,
    description: 'Controlled value. Stories manage this via internal state.',
    table: { type: { summary: 'any' } },
  },
  openTest: {
    control: 'boolean',
    description: 'Story/test helper to force dropdown open.',
    table: { type: { summary: 'boolean' } },
  },
  isCheckIcon: {
    control: 'boolean',
    description: 'Reserved prop (currently not used by render).',
    table: { type: { summary: 'boolean' } },
  },
  getOptionLabel: {
    control: false,
    description: 'Map option to label.',
    table: { type: { summary: '(option: any) => any' } },
  },
  isOptionEqualToValue: {
    control: false,
    description: 'Compare option with value.',
    table: { type: { summary: '(option: any, value: any) => boolean' } },
  },
  getOptionDisabled: {
    control: false,
    description: 'Disable certain options.',
    table: { type: { summary: '(option: any) => boolean' } },
  },
  renderOption: {
    control: false,
    description: 'Custom option renderer.',
    table: { type: { summary: '(props, option, state) => ReactNode' } },
  },
  renderTags: {
    control: false,
    description: 'Custom tags renderer.',
    table: { type: { summary: '(value, getTagProps) => ReactNode' } },
  },
  onChange: {
    action: 'changed',
    description: 'Called with shape { target: { name, value } }.',
    table: { type: { summary: '(eventLike: { target: { name?: string; value: any } }) => void' } },
  },
  onInputChange: {
    action: 'inputChanged',
    description: 'Called when typing (reason === "input").',
    table: { type: { summary: '(event, newInputValue: string, reason: string) => void' } },
  },
  sx: { control: false },
};
