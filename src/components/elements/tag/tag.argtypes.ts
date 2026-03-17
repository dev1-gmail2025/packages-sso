import type { ArgTypes } from '@storybook/react';
import type { TagElementProps } from './tag.element';

export const tagArgTypes: Partial<ArgTypes<TagElementProps>> = {
  type: {
    control: 'color',
    description: 'Base color (used for contained/outlined variants).',
    table: { type: { summary: 'string' } },
  },
  content: {
    control: 'text',
    description: 'Tag text content.',
    table: { type: { summary: 'string' } },
  },
  variant: {
    control: 'inline-radio',
    options: ['contained', 'outlined', 'outlined-border'],
    description: 'Visual variant.',
    table: { type: { summary: '"contained" | "outlined" | "outlined-border"' } },
  },
  size: {
    control: 'inline-radio',
    options: ['small', 'medium', 'large'],
    description: 'Size preset.',
    table: { type: { summary: '"small" | "medium" | "large"' } },
  },
  variation: {
    control: 'inline-radio',
    options: ['body1', 'caption'],
    description: 'Typography variant.',
    table: { type: { summary: '"body1" | "caption"' } },
  },
  width: {
    control: { type: 'number', min: 40, step: 10 },
    description: 'Optional fixed width.',
    table: { type: { summary: 'number' } },
  },
  color: {
    control: 'text',
    description: 'Text color override (for contained).',
    table: { type: { summary: 'string' } },
  },
  iconProps: { control: false },
  sx: { control: false },
};

