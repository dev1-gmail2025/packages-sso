import type { ArgTypes } from '@storybook/react';
import { AvatarUserInfoProps } from './avatar-user-info.element';

export const avatarUserInfoArgTypes: Partial<ArgTypes<AvatarUserInfoProps>> = {
  name: {
    control: 'text',
    description: 'The name of the user to display.',
    table: {
      type: { summary: 'string' },
    },
  },
  url: {
    control: 'text',
    description: 'URL of the avatar image.',
    table: {
      type: { summary: 'string' },
    },
  },
  positions: {
    control: 'object',
    description: 'Array of position titles to display below the name.',
    table: {
      type: { summary: 'string[]' },
      defaultValue: { summary: '[]' },
    },
  },
  maxWidth: {
    control: 'text',
    description: 'Maximum width for the position text.',
    table: {
      type: { summary: 'string | number' },
      defaultValue: { summary: '440px' },
    },
  },
  isTag: {
    control: 'boolean',
    description: 'If true, displays positions as a tag with special styling.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  sizeAvatar: {
    control: 'select',
    options: ['extra_small', 'small', 'medium', 'large', 'extra_large', 'avatar_group'],
    description: 'The size of the avatar.',
    table: {
      type: { summary: 'SizeProps | string' },
      defaultValue: { summary: 'large' },
    },
  },
  sxName: {
    control: false,
    description: 'Custom styles for the name Typography component.',
    table: {
      type: { summary: 'SxProps<Theme>' },
    },
  },
  sxPosition: {
    control: false,
    description: 'Custom styles for the position Typography component.',
    table: {
      type: { summary: 'SxProps<Theme>' },
    },
  },
};
