import type { ArgTypes } from '@storybook/react';
import type { SwitchElementProps } from './switch.element';

export const switchArgTypes: Partial<ArgTypes<SwitchElementProps>> = {
  name: {
    control: 'text',
    description: 'Field name passed in change payload.',
    table: { type: { summary: 'string' } },
  },
  value: {
    control: 'boolean',
    description: 'Current on/off value. In stories we usually manage this via state.',
    table: { type: { summary: 'boolean' } },
  },
  onChange: {
    action: 'changed',
    description: 'Called with shape { target: { name, value } } when toggled.',
    table: { type: { summary: '(eventLike: { target: { name?: string; value: boolean } }) => void' } },
  },
};
