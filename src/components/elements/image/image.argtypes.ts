import type { ArgTypes } from '@storybook/react';
import { SizeProps } from '../../../common';
import type { ImageElementProps } from './image.element';
import { ImageSizeType } from './image.enum';

export const imageArgTypes: Partial<ArgTypes<ImageElementProps>> = {
  url: {
    control: 'text',
    description: 'Image URL. Prefer stable local assets for visual tests (e.g. /images/empty.svg).',
    table: { type: { summary: 'string' } },
  },
  sizeType: {
    control: 'select',
    options: Object.values(ImageSizeType),
    description: 'Shape / sizing behavior.',
    table: {
      type: { summary: 'ImageSizeType' },
      defaultValue: { summary: 'CIRCLE' },
    },
  },
  size: {
    control: 'select',
    options: Object.values(SizeProps),
    description: 'Maps to internal size tokens (used by MAP_SIZE).',
    table: {
      type: { summary: 'SizeProps | string' },
      defaultValue: { summary: SizeProps.MEDIUM },
    },
  },
  isBorder: {
    control: 'boolean',
    description: 'If true, renders a 1px divider border.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  isWrap: {
    control: 'boolean',
    description: 'If true, wraps image with StackRow alignItems="center".',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  onClick: {
    action: 'clicked',
    description: 'Click handler. When provided, cursor becomes pointer.',
    table: { type: { summary: '(event: any) => void' } },
  },
  sx: { control: false },
};
