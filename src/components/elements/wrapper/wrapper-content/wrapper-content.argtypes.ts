import type { ArgTypes } from '@storybook/react';
import { WrapperContentElementProps } from './wrapper-content.element';

export const wrapperContentArgTypes: Partial<ArgTypes<WrapperContentElementProps>> = {
  label: {
    control: 'text',
    description: 'Header label.',
    table: { type: { summary: 'string' } },
  },
  iconLabel: {
    control: 'text',
    description: 'Material icon name for the header label.',
    table: { type: { summary: 'string' } },
  },
  labelSize: {
    control: 'select',
    options: ['small', 'medium', 'large'],
    description: 'Label size.',
    table: { type: { summary: '"large" | "small" | "medium"' } },
  },
  flex: {
    control: { type: 'number', min: 0, step: 1 },
    description: 'Flex grow for the wrapper (when width is not set).',
    table: { type: { summary: 'number' } },
  },
  height: {
    control: 'text',
    description: 'Height of the wrapper.',
    table: { type: { summary: 'string | number | "fit-content"' } },
  },
  width: {
    control: 'text',
    description: 'Width of the wrapper (overrides flex).',
    table: { type: { summary: 'string | number | "fit-content"' } },
  },
  direction: {
    control: 'inline-radio',
    options: ['column', 'row'],
    description: 'Children container direction.',
    table: { type: { summary: '"column" | "row"' } },
  },
  directionNodeLabel: {
    control: 'inline-radio',
    options: ['column', 'row'],
    description: 'nodeLabel direction.',
    table: { type: { summary: '"column" | "row"' } },
  },
  loading: {
    control: 'boolean',
    description: 'If true, shows LoadingComponent instead of children.',
    table: { type: { summary: 'boolean' } },
  },
  nodeLabel: { control: false },
  children: { control: false },
  sx: { control: false },
  sxChildren: { control: false },
};
