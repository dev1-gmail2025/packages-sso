import type { ArgTypes } from '@storybook/react';
import type { AppGridProps } from './app-grid.component';

export const appGridArgTypes: Partial<ArgTypes<AppGridProps>> = {
  columns: {
    control: { type: 'number', min: 1, max: 10, step: 1 },
    description: 'Number of columns.',
    table: { type: { summary: 'number' } },
  },
  rows: {
    control: { type: 'number', min: 1, max: 10, step: 1 },
    description: 'Number of rows per page.',
    table: { type: { summary: 'number' } },
  },
  iconSize: {
    control: { type: 'number', min: 24, max: 120, step: 1 },
    description: 'App icon box size (px).',
    table: { type: { summary: 'number' } },
  },
  iconRadius: {
    control: { type: 'number', min: 0, max: 32, step: 1 },
    description: 'Border radius for icon box (px).',
    table: { type: { summary: 'number' } },
  },
  gap: {
    control: 'text',
    description: 'CSS gap between items.',
    table: { type: { summary: 'number | string' } },
  },
  titleVariant: {
    control: 'select',
    options: ['subtitle1', 'body1', 'caption'],
    description: 'Typography variant for app title.',
    table: { type: { summary: '"subtitle1" | "body1" | "caption"' } },
  },
  titleColor: {
    control: 'color',
    description: 'Title color override.',
    table: { type: { summary: 'string' } },
  },
  showPagination: {
    control: 'boolean',
    description: 'Show pagination arrows and dots when multiple pages.',
    table: { type: { summary: 'boolean' } },
  },
  isShowAppHidden: {
    control: 'boolean',
    description: 'Render hidden placeholders to keep grid height stable on last page.',
    table: { type: { summary: 'boolean' } },
  },
  apps: { control: false },
  onClickApp: { action: 'clickApp', table: { type: { summary: '(appInfo: AppInfo) => void' } } },
  captionVariant: { control: false },
  captionColor: { control: false },
};
