import type { ArgTypes } from '@storybook/react';
import type { TabsComponentProps } from './tabs.component';

export const tabsArgTypes: Partial<ArgTypes<TabsComponentProps>> = {
  idSelect: {
    control: 'text',
    description: 'Selected tab id (initial / controlled-ish).',
    table: { type: { summary: 'string' } },
  },
  size: {
    control: 'select',
    options: ['small', 'medium', 'large'],
    description: 'Size forwarded to IconContentElement.',
    table: { type: { summary: '"large" | "small" | "medium"' } },
  },
  direction: {
    control: 'inline-radio',
    options: ['row', 'column'],
    description: 'Layout direction.',
    table: { type: { summary: "'row' | 'column'" }, defaultValue: { summary: 'row' } },
  },
  variant: {
    control: 'inline-radio',
    options: ['contained', 'outlined'],
    description: 'Visual variant.',
    table: { type: { summary: "'contained' | 'outlined'" }, defaultValue: { summary: 'contained' } },
  },
  onChange: {
    action: 'changed',
    description: 'Called with selected id (outlined variant only).',
    table: { type: { summary: '(newValue: string) => void' } },
  },
  tabs: { control: false },
  sx: { control: false },
  sxTabs: { control: false },
  sxWrapper: { control: false },
};
