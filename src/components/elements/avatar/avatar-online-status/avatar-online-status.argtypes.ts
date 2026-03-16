import type { ArgTypes } from '@storybook/react';
import { AvatarOnlineStatusElementProps } from './avatar-online-status.element';

export const avatarOnlineStatusArgTypes: Partial<ArgTypes<AvatarOnlineStatusElementProps>> = {
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
      defaultValue: { summary: 'extra_large' },
    },
  },
  online: {
    control: 'boolean',
    description: 'If true, shows online status with green badge and animation. If false, shows offline status with gray badge.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
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
