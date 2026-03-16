import type { ArgTypes } from '@storybook/react';
import { AvatarElementProps } from './avatar.element';

export const avatarArgTypes: Partial<ArgTypes<AvatarElementProps>> = {
  url: {
    control: 'text',
    description: 'URL of the avatar image.',
    table: {
      type: { summary: 'string | null' },
    },
  },
  size: {
    control: 'select',
    options: ['extra_small', 'small', 'medium', 'large', 'extra_large', 'avatar_group'],
    description: 'The size of the avatar.',
    table: {
      type: { summary: 'SizeProps | string' },
      defaultValue: { summary: 'medium' },
    },
  },
  tooltipContent: {
    control: 'text',
    description: 'Content to display in the tooltip when hovering over the avatar.',
    table: {
      type: { summary: 'ReactNode' },
    },
  },
  children: {
    control: 'text',
    description: 'Content to display inside the avatar (e.g., initials).',
    table: {
      type: { summary: 'ReactNode' },
    },
  },
};
