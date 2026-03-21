import type { ArgTypes } from '@storybook/react';
import { IconButtonElementProps } from './icon-button.element';

export const iconButtonArgTypes: Partial<ArgTypes<IconButtonElementProps>> = {
  icon: { control: 'text' },
  size: { control: { type: 'number', min: 8, max: 48, step: 1 } },
  onClick: { action: 'clicked' },
  sx: { control: false },
};
