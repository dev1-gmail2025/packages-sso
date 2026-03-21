import type { ArgTypes } from '@storybook/react';
import { ButtonImageElementProps } from './button-image.element';

export const buttonImageArgTypes: ArgTypes<ButtonImageElementProps> = {
  content: { control: 'text' },
  loading: { control: 'boolean' },
  disabled: { control: 'boolean' },
  variant: {
    control: 'select',
    options: ['text', 'outlined', 'contained'],
  },
  color: {
    control: 'select',
    options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
  },
  size: {
    control: 'select',
    options: ['small', 'medium', 'large'],
  },
  startIcon: { control: false },
  endIcon: { control: false },
  onClick: { action: 'clicked' },
};
