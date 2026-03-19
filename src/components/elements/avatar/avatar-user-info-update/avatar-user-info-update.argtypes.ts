import type { ArgTypes } from '@storybook/react';
import { AvatarUserInfoUpdateProps } from './avatar-user-info-update.element';

export const avatarUserInfoUpdateArgTypes: Partial<ArgTypes<AvatarUserInfoUpdateProps>> = {
  title: {
    control: 'text',
    description: 'Title displayed above the controls.',
    table: { type: { summary: 'string' }, defaultValue: { summary: 'Ảnh đại diện' } },
  },
  nameFile: {
    control: 'text',
    description: 'Helper text for file rules.',
    table: { type: { summary: 'string' }, defaultValue: { summary: 'PNG, JPG dưới 5MB' } },
  },
  url: {
    control: 'object',
    description: 'Current avatar source. Supports string, FileWithPreview, FileItem, FileFromApi.',
    table: { type: { summary: 'FileWithPreviewOrUrl' } },
  },
  loading: {
    control: 'boolean',
    description: 'Show loading overlay on avatar.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  onChange: {
    action: 'onChange',
    description: 'Called when selecting/removing a file.',
    table: { type: { summary: '(file: FileWithPreview | null) => void' } },
  },
};

