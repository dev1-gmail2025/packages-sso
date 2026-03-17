import type { ArgTypes } from '@storybook/react';
import type { ListIconContentElementProps } from './list-icon-content.element';

export const listIconContentArgTypes: Partial<ArgTypes<ListIconContentElementProps>> = {
  titleNode: {
    control: false,
    description: 'Optional ReactNode rendered as a non-clickable title row.',
  },
  list: {
    control: false,
    description: 'List items (content/icon/onClick). Use render to customize.',
  },
};

