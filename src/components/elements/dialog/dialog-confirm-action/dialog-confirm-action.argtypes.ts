import type { ArgTypes } from '@storybook/react';

export const dialogConfirmActionArgTypes: ArgTypes = {
  open: {
    control: 'boolean',
    description: 'Whether the confirmation dialog is open.',
    table: {
      type: { summary: 'boolean' },
    },
  },
  title: {
    control: 'text',
    description: 'Title of the confirmation dialog.',
    table: {
      type: { summary: 'string' },
    },
  },
  description: {
    control: 'text',
    description: 'Description text shown inside the dialog.',
    table: {
      type: { summary: 'string' },
    },
  },
  closeText: {
    control: 'text',
    description: 'Label for the close button.',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Hủy' },
    },
  },
  confirmText: {
    control: 'text',
    description: 'Label for the confirm button.',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Xác nhận' },
    },
  },
  confirmColor: {
    control: 'text',
    description: 'SnackbarType used to style the confirm button.',
    table: {
      type: { summary: 'SnackbarType' },
    },
  },
  closeColor: {
    control: 'text',
    description: 'SnackbarType used to style the close button.',
    table: {
      type: { summary: 'SnackbarType' },
    },
  },
  loading: {
    control: 'boolean',
    description: 'If true, shows loading state on buttons.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  onClose: {
    action: 'closed',
    description: 'Callback fired when dialog is closed.',
    table: {
      type: { summary: '() => void' },
    },
  },
  onConfirm: {
    action: 'confirmed',
    description: 'Callback fired when confirm button is clicked.',
    table: {
      type: { summary: '() => void' },
    },
  },
};

