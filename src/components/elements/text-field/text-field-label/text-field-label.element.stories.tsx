import type { Meta, StoryObj } from '@storybook/react';

import { textFieldLabelArgTypes } from './text-field-label.argtypes';
import { TextFieldLabelElement } from './text-field-label.element';

const meta: Meta<typeof TextFieldLabelElement> = {
  title: 'Elements/TextField/TextFieldLabel',
  component: TextFieldLabelElement,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    iconLabel: 'info',
    required: false,
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: textFieldLabelArgTypes,
};

export default meta;
type Story = StoryObj<typeof TextFieldLabelElement>;

export const Default: Story = {};
