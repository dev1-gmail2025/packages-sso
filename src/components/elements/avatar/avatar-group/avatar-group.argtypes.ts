import type { ArgTypes } from '@storybook/react';
import type { AvatarGroupElementProps } from './avatar-group.element';
import { StatusAvatar } from '../avatar-enum.enum';

export const avatarGroupArgTypes: Partial<ArgTypes<AvatarGroupElementProps>> = {
  items: {
    control: 'object',
    description: 'List of avatar items (url/alt/tooltipContent/status).',
    table: { type: { summary: 'AvatarGroupItem[]' } },
  },
  maxAvatars: {
    control: { type: 'number', min: 1, max: 20, step: 1 },
    description: 'Max number of visible avatars before showing surplus.',
    table: { type: { summary: 'number' }, defaultValue: { summary: '5' } },
  },
  size: {
    control: 'select',
    options: ['extra_small', 'small', 'medium', 'large', 'extra_large', 'avatar_group', 'avatar_chat_person'],
    description: 'Avatar size applied to items.',
    table: { type: { summary: 'SizeProps' }, defaultValue: { summary: 'large' } },
  },
  approveStatus: {
    control: 'select',
    options: Object.values(StatusAvatar),
    description: 'Status value treated as approved (green).',
    table: { type: { summary: 'string' }, defaultValue: { summary: StatusAvatar.APPROVED } },
  },
  rejectStatus: {
    control: 'select',
    options: Object.values(StatusAvatar),
    description: 'Status value treated as rejected (red).',
    table: { type: { summary: 'string' }, defaultValue: { summary: StatusAvatar.REJECTED } },
  },
  onClick: {
    action: 'onClick',
    description: 'Click handler (applied to each AvatarElement via props spreading).',
    table: { type: { summary: '(event) => void' } },
  },
};

