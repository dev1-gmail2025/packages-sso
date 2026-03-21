import type { ArgTypes } from '@storybook/react';
import type { CardStatisticsComponentProps } from './card-statistic.component';

export const cardStatisticArgTypes: Partial<ArgTypes<CardStatisticsComponentProps>> = {
  label: {
    control: 'text',
    description: 'Card title.',
    table: { type: { summary: 'string' } },
  },
  count: {
    control: { type: 'number', min: 0, step: 1 },
    description: 'Main statistic number.',
    table: { type: { summary: 'number' } },
  },
  color: {
    control: 'color',
    description: 'Color for count text.',
    table: { type: { summary: 'string' } },
  },
  bgColor: {
    control: 'color',
    description: 'Base color used to generate icon background.',
    table: { type: { summary: 'string' } },
  },
  icon: {
    control: 'text',
    description: 'Icon image url.',
    table: { type: { summary: 'string' } },
  },
  info: {
    control: false,
    description: 'Optional ReactNode rendered below the count.',
    table: { type: { summary: 'ReactNode' } },
  },
};
