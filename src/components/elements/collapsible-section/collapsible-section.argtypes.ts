import type { ArgTypes } from '@storybook/react';
import type { CollapsibleSectionProps } from './collapsible-section.component';

export const collapsibleSectionArgTypes: Partial<ArgTypes<CollapsibleSectionProps>> = {
  title: {
    control: 'text',
    description: 'Section title shown in the header.',
    table: { type: { summary: 'string' } },
  },
  defaultExpanded: {
    control: 'boolean',
    description: 'Initial expanded state (internal state after first render is uncontrolled).',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
  },
  headerAction: {
    control: false,
    description: 'Optional action node rendered on the right side of header.',
    table: { type: { summary: 'ReactNode' } },
  },
  children: {
    control: false,
    description: 'Section content (collapsible).',
    table: { type: { summary: 'ReactNode' } },
  },
  sx: {
    control: 'object',
    description: 'MUI sx for container.',
    table: { type: { summary: 'SxProps<Theme>' } },
  },
  titleSx: {
    control: 'object',
    description: 'MUI sx for title Typography.',
    table: { type: { summary: 'SxProps<Theme>' } },
  },
};

