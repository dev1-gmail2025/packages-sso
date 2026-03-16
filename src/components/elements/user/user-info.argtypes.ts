import type { ArgTypes } from '@storybook/react';
import type { UserInfoProps } from './user-info.element';

export const userInfoArgTypes: Partial<ArgTypes<UserInfoProps>> = {
  name: {
    control: 'text',
    description: 'User name.',
    table: { type: { summary: 'string' } },
  },
  department: {
    control: 'text',
    description: 'Optional department (renders second line).',
    table: { type: { summary: 'string' } },
  },
  icon: {
    control: 'text',
    description: 'Material icon name.',
    table: { type: { summary: 'string' }, defaultValue: { summary: 'person' } },
  },
  sx: { control: false },
};

