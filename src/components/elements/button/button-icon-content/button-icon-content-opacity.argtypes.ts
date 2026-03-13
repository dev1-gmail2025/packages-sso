import type { ArgTypes } from '@storybook/react';
import { ButtonIconContentOpacityElementProps } from './button-icon-content-opacity.element';

export const buttonIconContentOpacityArgTypes: ArgTypes<ButtonIconContentOpacityElementProps> = {
  icon: { control: 'text' },
  content: { control: 'text' },
  permission: { control: 'boolean' },
  isQuare: { control: 'boolean' },
  variant: {
    control: 'select',
    options: ['text', 'outlined', 'contained'],
  },
  color: {
    control: 'select',
    options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
  },
  onClick: { action: 'clicked' },
};

