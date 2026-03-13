import type { ArgTypes } from '@storybook/react';
import { ButtonElementProps } from './button.element';

export const buttonArgTypes: ArgTypes<ButtonElementProps> = {
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

