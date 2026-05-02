import type { ArgTypes } from '@storybook/react';
import type { ButtonIconElementProps } from './button-icon.element';

export const buttonIconArgTypes: ArgTypes<ButtonIconElementProps> = {
  icon: { control: 'text' },
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
  sizeType: {
    control: 'select',
    options: ['CIRCLE', 'SQUARE', 'FULL_WIDTH'],
  },
  onClick: { action: 'clicked' },
};
