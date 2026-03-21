import type { ArgTypes } from '@storybook/react';
import type { TimeAgoComponentProps } from './time-ago.component';

export const timeAgoArgTypes: Partial<ArgTypes<TimeAgoComponentProps>> = {
  time: {
    control: 'date',
    description: 'Base time to compute "time ago" from.',
    table: { type: { summary: 'Date' } },
  },
  hasText: {
    control: 'boolean',
    description: 'If true, prefix with "Cập nhật lúc ".',
    table: { type: { summary: 'boolean' } },
  },
};
