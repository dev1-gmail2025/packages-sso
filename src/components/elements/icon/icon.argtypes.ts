import type { ArgTypes } from '@storybook/react';
import type { IconElementProps } from './icon.element';

export const iconArgTypes: Partial<ArgTypes<IconElementProps>> = {
  icon: { control: 'text' },
  size: { control: 'select', options: ['small', 'medium', 'large'] },
  fill: { control: 'select', options: [0, 1] },
  color: { control: 'select', options: ['inherit', 'disabled', 'primary', 'secondary', 'success', 'error', 'info', 'warning'] },
  disabled: { control: 'boolean' },
  onClick: { action: 'clicked' },
  sx: { control: false },
};

