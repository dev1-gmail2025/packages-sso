import type { ArgTypes } from '@storybook/react';
import { SizeProps } from '../../../../common';
import { ImageContentCaptionComponentProps } from './image-content-caption.component';

export const imageContentCaptionArgTypes: Partial<ArgTypes<ImageContentCaptionComponentProps>> = {
  url: {
    control: 'text',
    description: 'Avatar URL (prefer stable local assets for visual tests).',
    table: { type: { summary: 'string' } },
  },
  alt: {
    control: 'text',
    description: 'Alt text for the avatar image.',
    table: { type: { summary: 'string' } },
  },
  content: {
    control: 'text',
    description: 'Main content text.',
    table: { type: { summary: 'string' } },
  },
  caption: {
    control: 'text',
    description: 'Caption text (secondary).',
    table: { type: { summary: 'string' } },
  },
  userTitleName: {
    control: 'text',
    description: 'Optional user title name rendered by TypographyContentCaption.',
    table: { type: { summary: 'string' } },
  },
  sizeType: {
    control: 'select',
    options: Object.values(SizeProps),
    description: 'Avatar size token.',
    table: { type: { summary: 'SizeProps | string' }, defaultValue: { summary: SizeProps.MEDIUM } },
  },
  sx: { control: false },
  sxContent: { control: false },
  sxCaption: { control: false },
};

