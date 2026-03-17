import type { ArgTypes } from '@storybook/react';
import { WrapperCenterElementProps } from './wrapper-center.element';

export const wrapperCenterArgTypes: Partial<ArgTypes<WrapperCenterElementProps>> = {
  isWrap: {
    control: 'boolean',
    description: 'If true, wraps children with StackRowAlignJustCenter.',
    table: { type: { summary: 'boolean' } },
  },
  children: { control: false },
};

