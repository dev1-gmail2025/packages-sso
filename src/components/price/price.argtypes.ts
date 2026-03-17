import type { ArgTypes } from '@storybook/react';
import type { PriceComponentProps } from './price.component';

export const priceArgTypes: Partial<ArgTypes<PriceComponentProps>> = {
  price: {
    control: { type: 'number', min: 0, step: 0.1 },
    description: 'Current price.',
    table: { type: { summary: 'number' } },
  },
  originalPrice: {
    control: { type: 'number', min: 0, step: 0.1 },
    description: 'Original price (shows strike-through when different).',
    table: { type: { summary: 'number' } },
  },
  discountPercent: {
    control: { type: 'number', step: 1 },
    description: 'Discount percent (negative means increase).',
    table: { type: { summary: 'number' } },
  },
  size: {
    control: 'select',
    options: ['small', 'medium', 'large'],
    description: 'Typography size.',
    table: { type: { summary: '"small" | "medium" | "large"' }, defaultValue: { summary: 'small' } },
  },
  sameSize: {
    control: 'boolean',
    description: 'If true, original/discount uses same typography as price.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  isLineHeight1: {
    control: 'boolean',
    description: 'If true, force lineHeight=1 for tighter layout.',
    table: { type: { summary: 'boolean' } },
  },
  color: {
    control: 'color',
    description: 'Color override for current price.',
    table: { type: { summary: 'string' } },
  },
  onClick: { action: 'clicked' },
  sx: { control: false },
};

