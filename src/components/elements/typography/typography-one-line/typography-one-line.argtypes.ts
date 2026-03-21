import type { ArgTypes } from '@storybook/react';
import type { TypographyOneLineProps } from './typography-limit-one-line.component';

export const typographyOneLineArgTypes: Partial<ArgTypes<TypographyOneLineProps>> = {
  content: {
    control: 'text',
    description: 'Content to render (clamped to 1 line).',
    table: { type: { summary: 'any' } },
  },
  variant: {
    control: 'text',
    description: 'Typography variant (MUI).',
    table: { type: { summary: 'TypographyProps["variant"]' } },
  },
  sx: { control: false },
};
