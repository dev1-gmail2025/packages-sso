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

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithoutLabel: Story = {
  render: (args) => <TextFieldLabelElement {...args} label={undefined} />,
  args: {
    iconLabel: 'info',
  },
};

export const CustomIconAndColor: Story = {
  args: {
    label: 'Custom',
    iconLabel: 'info',
    colorLabel: 'primary.main',
    required: false,
  },
};
