import type { ArgTypes } from '@storybook/react';
import type { PaginationElementProps } from './pagination.element';

export const paginationArgTypes: Partial<ArgTypes<PaginationElementProps>> = {
  total: {
    control: { type: 'number', min: 0, step: 1 },
    description: 'Total items.',
    table: { type: { summary: 'number' }, defaultValue: { summary: '0' } },
  },
  page: {
    control: { type: 'number', min: 1, step: 1 },
    description: 'Current page (1-based). In stories we manage this with local state.',
    table: { type: { summary: 'number' } },
  },
  take: {
    control: { type: 'number', min: 1, step: 1 },
    description: 'Rows per page.',
    table: { type: { summary: 'number' } },
  },
  openRowsPerPage: {
    control: 'boolean',
    description: 'Show the rows-per-page select.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
  },
  onChange: {
    action: 'changed',
    description: 'Fired when page or take changes.',
    table: { type: { summary: '(pagination: { page: number; take: number }) => void' } },
  },
  sx: { control: false },
};
