import type { ArgTypes } from '@storybook/react';
import type { DialogElementProps } from './dialog.element';

export const dialogArgTypes: Partial<ArgTypes<DialogElementProps>> = {
  label: {
    control: 'text',
    description: 'Title text of the dialog.',
    table: {
      type: { summary: 'string' },
    },
  },
  iconLabel: {
    control: 'text',
    description: 'Optional icon name shown before the title.',
    table: {
      defaultValue: { summary: 'edit' },
      type: { summary: 'string' },
    },
  },
  isForm: {
    control: 'boolean',
    description: 'If true, wraps content in a Formik <Form/>.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  closeButton: {
    control: 'boolean',
    description: 'Show close icon button in the header.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'true' },
    },
  },
  fullWidth: {
    control: 'boolean',
    description: 'Make action buttons take full width.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  widthButton: {
    control: 'number',
    description: 'Custom width (px) for all bottom buttons.',
    table: {
      type: { summary: 'number' },
    },
  },
  nodeContent: {
    control: false,
    description: 'Custom React node for the main content.',
  },
  nodeHelp: {
    control: false,
    description: 'Optional help content shown when user toggles help.',
  },
  nodeBottomLeft: {
    control: false,
    description: 'Custom content shown at the bottom left area.',
  },
  buttonLeft: {
    control: false,
    description: 'Props for the left action button.',
  },
  buttonCenter: {
    control: false,
    description: 'Props for the center action button.',
  },
  buttonRight: {
    control: false,
    description: 'Props for the right action button.',
  },
  sxDialogTitle: {
    control: false,
  },
  sxContent: {
    control: false,
  },
  sxTitle: {
    control: false,
  },
  sxBottom: {
    control: false,
  },
};
