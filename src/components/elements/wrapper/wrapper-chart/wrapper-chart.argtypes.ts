import type { ArgTypes } from '@storybook/react';
import type { WrapperChartElementProps } from './wrapper-chart.element';

export const wrapperChartArgTypes: Partial<ArgTypes<WrapperChartElementProps>> = {
  name: {
    control: 'text',
    description: 'Chart title.',
    table: { type: { summary: 'string' } },
  },
  loading: {
    control: 'boolean',
    description: 'If true, shows LoadingComponent.',
    table: { type: { summary: 'boolean' } },
  },
  chart: { control: false },
  sx: { control: false },
};
