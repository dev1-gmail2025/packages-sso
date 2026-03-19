import type { ArgTypes } from '@storybook/react';
import { AvatarUserInfoDetailProps } from './avatar-user-info-detail.element';

export const avatarUserInfoDetailArgTypes: Partial<ArgTypes<AvatarUserInfoDetailProps>> = {
  name: {
    control: 'text',
    description: 'User full name.',
    table: { type: { summary: 'string' } },
  },
  url: {
    control: 'text',
    description: 'Avatar image URL.',
    table: { type: { summary: 'string | undefined' } },
  },
  code: {
    control: 'text',
    description: 'Employee code (MSNV).',
    table: { type: { summary: 'string | undefined' } },
  },
  positions: {
    control: 'object',
    description: 'List of positions (rendered joined by " / ").',
    table: { type: { summary: 'string[]' } },
  },
  maxWidth: {
    control: 'text',
    description: 'Max width applied to positions text.',
    table: { type: { summary: 'string | number' }, defaultValue: { summary: '440px' } },
  },
  sizeAvatar: {
    control: 'select',
    options: ['extra_small', 'small', 'medium', 'large', 'extra_large', 'avatar_group', 'avatar_chat_person'],
    description: 'Avatar size prop.',
    table: { type: { summary: 'SizeProps' }, defaultValue: { summary: 'large' } },
  },
  directManagers: {
    control: 'object',
    description: 'Direct managers list (rendered as AvatarGroupElement items).',
    table: { type: { summary: 'any[]' } },
  },
};

