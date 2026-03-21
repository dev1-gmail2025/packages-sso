import type { ArgTypes } from '@storybook/react';
import { DashedDividerElementProps } from './dashed-divider.element';

export const dashedDividerArgTypes: Partial<ArgTypes<DashedDividerElementProps>> = {
  orientation: {
    control: 'inline-radio',
    options: ['horizontal', 'vertical'],
    description: 'Divider orientation.',
    table: {
      type: { summary: `'horizontal' | 'vertical'` },
      defaultValue: { summary: 'horizontal' },
    },
  },
  color: {
    control: 'color',
    description: 'Divider color.',
    table: {
      type: { summary: 'string' },
    },
  },
  thickness: {
    control: { type: 'number', min: 1, max: 8, step: 1 },
    description: 'Thickness (px) of the divider line.',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: '1' },
    },
  },
  length: {
    control: 'text',
    description: 'Length of the divider (px or CSS length).',
    table: {
      type: { summary: 'string | number' },
      defaultValue: { summary: '100%' },
    },
  },
  dashed: {
    control: 'boolean',
    description: 'Use dashed style when true, solid when false.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'true' },
    },
  },
  sx: {
    control: false,
    description: 'Additional MUI sx styles applied to the divider pseudo-element or root.',
    table: {
      type: { summary: 'SxProps<Theme>' },
    },
  },
};
