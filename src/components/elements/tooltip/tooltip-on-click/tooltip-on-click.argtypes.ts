import type { ArgTypes } from '@storybook/react';
import type { TooltipOnClickElementProps } from './tooltip-on-click.element';

export const tooltipOnClickArgTypes: Partial<ArgTypes<TooltipOnClickElementProps>> = {
  content: {
    control: 'text',
    description: 'Tooltip content (string or ReactElement).',
    table: { type: { summary: 'ReactElement | string' } },
  },
  placement: {
    control: 'select',
    options: [
      'top',
      'bottom',
      'left',
      'right',
      'top-start',
      'top-end',
      'bottom-start',
      'bottom-end',
      'left-start',
      'left-end',
      'right-start',
      'right-end',
    ],
    description: 'Tooltip placement.',
    table: { type: { summary: 'TooltipProps["placement"]' }, defaultValue: { summary: 'top' } },
  },
  open: {
    control: 'boolean',
    description: 'Controlled open state. In stories we manage via state.',
    table: { type: { summary: 'boolean' } },
  },
  onClickAway: {
    action: 'clickAway',
    description: 'Called when clicking outside.',
    table: { type: { summary: '() => void' } },
  },
  onOpen: { action: 'opened' },
  onClose: { action: 'closed' },
  children: { control: false },
};
