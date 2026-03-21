import type { ArgTypes } from '@storybook/react';
import { TooltipOnHoverElementProps } from './tooltip-on-hover.element';

export const tooltipOnHoverArgTypes: Partial<ArgTypes<TooltipOnHoverElementProps>> = {
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
  openTest: {
    control: 'boolean',
    description: 'Force open for testing/demo (disables hover listener).',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  showCloseIcon: {
    control: 'boolean',
    description: 'Show a close icon inside the tooltip title area.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  onCloseClick: {
    action: 'closeClicked',
    description: 'Called when close icon is clicked.',
    table: { type: { summary: '() => void' } },
  },
  onOpen: { action: 'opened' },
  onClose: { action: 'closed' },
  children: { control: false },
};
