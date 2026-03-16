import type { ArgTypes } from '@storybook/react';
import type { TextFieldLabelElementProps } from './text-field-label.element';

export const textFieldLabelArgTypes: Partial<ArgTypes<TextFieldLabelElementProps>> = {
  label: {
    control: 'text',
    description: 'Label content.',
    table: { type: { summary: 'string | ReactNode' } },
  },
  iconLabel: {
    control: 'text',
    description: 'Optional icon name.',
    table: { type: { summary: 'string' } },
  },
  colorLabel: {
    control: 'color',
    description: 'Label color override.',
    table: { type: { summary: 'string' } },
  },
  required: {
    control: 'boolean',
    description: 'Show red * when required.',
    table: { type: { summary: 'boolean' } },
  },
};

