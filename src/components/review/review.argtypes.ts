import type { ArgTypes } from '@storybook/react';
import type { ReviewComponentProps } from './review.component';

export const reviewArgTypes: Partial<ArgTypes<ReviewComponentProps>> = {
  averageRating: {
    control: { type: 'number', min: 0, max: 5, step: 0.1 },
    description: 'Average rating.',
    table: { type: { summary: 'number' } },
  },
  reviewCount: {
    control: { type: 'number', min: 0, step: 1 },
    description: 'Review count.',
    table: { type: { summary: 'number' } },
  },
  onClick: { action: 'clicked' },
  sx: { control: false },
};
