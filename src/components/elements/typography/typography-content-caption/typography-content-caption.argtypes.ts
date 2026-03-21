import type { ArgTypes } from '@storybook/react';
import { TypographyContentCaptionProps } from './typography-content-caption.component';

export const typographyContentCaptionArgTypes: Partial<ArgTypes<TypographyContentCaptionProps>> = {
  content: {
    control: 'text',
    description: 'Main content text.',
    table: { type: { summary: 'any' } },
  },
  caption: {
    control: 'text',
    description: 'Caption text.',
    table: { type: { summary: 'string' } },
  },
  userTitleName: {
    control: 'text',
    description: 'Optional title line between content and caption.',
    table: { type: { summary: 'string' } },
  },
  sx: { control: false },
  sxContent: { control: false },
  sxCaption: { control: false },
};
