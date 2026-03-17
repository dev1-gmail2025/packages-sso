import type { ArgTypes } from '@storybook/react';
import type { TypographyInfoGridProps } from './typography-info-user.component';

export const typographyInfoUserArgTypes: Partial<ArgTypes<TypographyInfoGridProps>> = {
  columns: {
    control: { type: 'number', min: 1, max: 4, step: 1 },
    description: 'Number of columns in the grid.',
    table: { type: { summary: 'number' }, defaultValue: { summary: '2' } },
  },
  columnGap: {
    control: 'text',
    description: 'CSS column gap.',
    table: { type: { summary: 'number | string' } },
  },
  gap: {
    control: { type: 'number', min: 0, max: 32, step: 1 },
    description: 'Row gap.',
    table: { type: { summary: 'number' } },
  },
  highlightQuery: {
    control: 'text',
    description: 'Query to highlight in labels/values.',
    table: { type: { summary: 'string' } },
  },
  showEmptyAsDots: {
    control: 'boolean',
    description: 'If true, empty string shows "...".',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
  },
  direction: {
    control: 'inline-radio',
    options: ['row', 'column'],
    description: 'Layout direction inside each item.',
    table: { type: { summary: "'row' | 'column'" }, defaultValue: { summary: 'row' } },
  },
  gridTemplateColumns: {
    control: 'text',
    description: 'Inner grid template for label/value when direction=row.',
    table: { type: { summary: 'string' } },
  },
  items: { control: false },
  sx: { control: false },
};

