import type { ArgTypes } from '@storybook/react';
import type { TimeAgoContentComponentProps } from './time-ago-content.component';

export const timeAgoContentArgTypes: Partial<ArgTypes<TimeAgoContentComponentProps>> = {
  content: {
    control: 'text',
    description: 'Main content text.',
    table: { type: { summary: 'string' } },
  },
  time: {
    control: 'date',
    description: 'Base time to compute "time ago".',
    table: { type: { summary: 'Date' } },
  },
  height: {
    control: 'text',
    description: 'Container height (number or CSS length).',
    table: { type: { summary: 'number | string' } },
  },
};
