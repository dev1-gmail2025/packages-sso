import type { ArgTypes } from '@storybook/react';
import type { RadioGroupElementProps } from './radio-group.element';

export const radioGroupArgTypes: Partial<ArgTypes<RadioGroupElementProps>> = {
  name: {
    control: 'text',
    description: 'Field name passed in change payload.',
    table: { type: { summary: 'string' } },
  },
  direction: {
    control: 'inline-radio',
    options: ['row', 'column'],
    description: 'Direction of radios.',
    table: { type: { summary: "'row' | 'column'" }, defaultValue: { summary: 'row' } },
  },
  label: {
    control: 'text',
    description: 'Optional group label rendered above the radios.',
    table: { type: { summary: 'string' } },
  },
  iconLabel: {
    control: 'text',
    description: 'Icon name shown next to the label.',
    table: { type: { summary: 'string' }, defaultValue: { summary: 'event_list' } },
  },
  disabled: {
    control: 'boolean',
    description: 'Disable the whole group.',
    table: { type: { summary: 'boolean' } },
  },
  defaultValue: {
    control: 'text',
    description: 'Uncontrolled default value.',
    table: { type: { summary: 'any' } },
  },
  value: {
    control: 'text',
    description: 'Controlled value. In stories we usually manage this via state.',
    table: { type: { summary: 'any' } },
  },
  required: {
    control: 'boolean',
    description: 'Mark label as required.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  onChange: {
    action: 'changed',
    description: 'Called with shape { target: { name, value } } when selection changes.',
    table: { type: { summary: '(eventLike: { target: { name?: string; value?: any } }) => void' } },
  },
  sx: { control: false },
  children: { control: false },
};
