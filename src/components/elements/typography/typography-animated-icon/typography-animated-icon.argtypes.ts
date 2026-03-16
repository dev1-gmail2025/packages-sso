import type { ArgTypes } from '@storybook/react';
import { TypographyAnimatedIconImageProps } from './typography-animated-icon.component';

export const typographyAnimatedIconArgTypes: Partial<ArgTypes<TypographyAnimatedIconImageProps>> = {
  content: {
    control: 'text',
    description: 'Content text (when set, border uses secondary color).',
    table: { type: { summary: 'string' } },
  },
  placeholder: {
    control: 'text',
    description: 'Placeholder shown when content is empty.',
    table: { type: { summary: 'string' } },
  },
  src: {
    control: 'text',
    description: 'Optional image url rendered below the text.',
    table: { type: { summary: 'string' } },
  },
  iconSize: {
    control: 'select',
    options: ['small', 'medium', 'large'],
    description: 'Size passed to ImageElement.',
    table: { type: { summary: '"large" | "small" | "medium"' }, defaultValue: { summary: 'large' } },
  },
  loading: {
    control: 'boolean',
    description: 'Show loading spinner.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  sx: { control: false },
};

