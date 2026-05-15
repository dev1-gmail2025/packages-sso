import type { ArgTypes } from '@storybook/react';
import type { DropdownFieldComponent } from './dropdown-field.component';

type DropdownFieldProps = React.ComponentProps<typeof DropdownFieldComponent>;

export const dropdownFieldArgTypes: Partial<ArgTypes<DropdownFieldProps>> = {
  label: {
    control: 'text',
    description: 'Label text displayed above the dropdown.',
    table: { type: { summary: 'string' } },
  },
  placeholder: {
    control: 'text',
    description: 'Placeholder text shown when no value is selected.',
    table: { type: { summary: 'string' }, defaultValue: { summary: 'Select option' } },
  },
  value: {
    control: false,
    description: 'Controlled value. Stories manage this via internal state.',
    table: { type: { summary: 'string | number | null' } },
  },
  disabled: {
    control: 'boolean',
    description: 'Disables the dropdown.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  error: {
    control: 'boolean',
    description: 'Puts the dropdown into error state.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  success: {
    control: 'boolean',
    description: 'Puts the dropdown into success state.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  errorMessage: {
    control: 'text',
    description: 'Message displayed below the dropdown when in error state.',
    table: { type: { summary: 'ReactNode' } },
  },
  successMessage: {
    control: 'text',
    description: 'Message displayed below the dropdown when in success state.',
    table: { type: { summary: 'ReactNode' } },
  },
  helperText: {
    control: 'text',
    description: 'Helper text displayed below the dropdown.',
    table: { type: { summary: 'string' } },
  },
  borderRadius: {
    control: { type: 'number', min: 0, max: 50 },
    description: 'Border radius in px. Use "max" for pill shape (100px).',
    table: { type: { summary: "number | 'max'" }, defaultValue: { summary: '6' } },
  },
  required: {
    control: 'boolean',
    description: 'Marks the field as required (adds * to label).',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  options: {
    control: 'object',
    description:
      'Array of options. Each option may include label, value, icon (Material icon name), avatar (image URL), and statusIndicator.',
    table: {
      type: {
        summary:
          '{ label: string; value: string | number; icon?: string; avatar?: string; statusIndicator?: boolean }[]',
      },
    },
  },
  checkIconColor: {
    control: 'color',
    description: 'Color of the check icon shown next to the selected option.',
    table: { type: { summary: 'string' } },
  },
  onChange: {
    action: 'changed',
    description: 'Callback fired when the selected value changes.',
    table: { type: { summary: '(value: string | number) => void' } },
  },
  sx: { control: false, description: 'MUI sx prop for the root Box.' },
  labelSx: { control: false, description: 'MUI sx prop applied to the label Typography.' },
};
