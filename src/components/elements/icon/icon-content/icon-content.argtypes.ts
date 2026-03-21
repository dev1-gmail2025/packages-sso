import type { ArgTypes } from '@storybook/react';
import type { IconContentElementProps } from './icon-content.element';

export const iconContentArgTypes: Partial<ArgTypes<IconContentElementProps>> = {
  icon: { control: 'text' },
  content: { control: 'text' },
  size: { control: 'select', options: ['small', 'medium', 'large'] },
  fill: { control: 'select', options: [0, 1] },
  color: { control: 'select', options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'] },
  isNowrap: { control: 'boolean' },
  hiddenContent: { control: 'boolean' },
  applyCssOnClick: { control: 'boolean' },
  id: { control: 'text' },
  onClick: { action: 'clicked' },
  sx: { control: false },
  sxIcon: { control: false },
  sxText: { control: false },
};
