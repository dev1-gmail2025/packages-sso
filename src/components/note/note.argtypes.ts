import type { ArgTypes } from '@storybook/react';
import type { NoteComponentProps } from './note.component';

export const noteArgTypes: Partial<ArgTypes<NoteComponentProps>> = {
  type: {
    control: 'select',
    options: ['info', 'recommend', 'warning', 'error'],
    description: 'Note variant.',
    table: { type: { summary: '"info" | "recommend" | "warning" | "error"' }, defaultValue: { summary: 'info' } },
  },
  content: {
    control: 'text',
    description: 'Note content.',
    table: { type: { summary: 'string' } },
  },
  href: {
    control: 'text',
    description: 'Optional link href.',
    table: { type: { summary: 'string' } },
  },
  contentHref: {
    control: 'text',
    description: 'Optional link text.',
    table: { type: { summary: 'string' } },
  },
};
