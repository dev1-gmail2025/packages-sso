import type { ArgTypes } from '@storybook/react';
import type { LoadingComponentProps } from './loading.component';

export const loadingArgTypes: Partial<ArgTypes<LoadingComponentProps>> = {
  size: {
    control: 'select',
    options: ['small', 'medium', 'large'],
    description: 'Spinner size.',
    table: { type: { summary: '"large" | "small" | "medium"' }, defaultValue: { summary: 'medium' } },
  },
  color: {
    control: 'color',
    description: 'Spinner color override.',
    table: { type: { summary: 'string' } },
  },
  sx: { control: false },
};

