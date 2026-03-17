import type { ArgTypes } from '@storybook/react';
import type { SwitchContentElementProps } from './switch-content.element';

export const switchContentArgTypes: Partial<ArgTypes<SwitchContentElementProps>> = {
  name: {
    control: 'text',
    description: 'Field name passed in change payload.',
    table: { type: { summary: 'string' } },
  },
  content: {
    control: 'text',
    description: 'Label shown before the switch.',
    table: { type: { summary: 'string' } },
  },
  value: {
    control: 'boolean',
    description: 'Current value for the nested SwitchElement.',
    table: { type: { summary: 'boolean' } },
  },
  onChange: {
    action: 'changed',
    description: 'Called with shape { target: { name, value } } when toggled.',
    table: { type: { summary: '(eventLike: { target: { name?: string; value: boolean } }) => void' } },
  },
  sx: { control: false },
};

