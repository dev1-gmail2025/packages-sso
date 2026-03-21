import type { Meta, StoryObj } from '@storybook/react';

import { TextFieldElement } from './text-field.element';
import { textFieldArgTypes } from './text-field.argtypes';

const meta: Meta<typeof TextFieldElement> = {
  title: 'Elements/TextField/TextField',
  component: TextFieldElement,
  tags: ['autodocs'],
  args: {
    name: 'field',
    label: 'Field label',
    iconLabel: 'edit',
    placeholder: 'Nhập dữ liệu...',
    value: 'Hello',
    showResetButton: true,
    required: false,
    disabled: false,
    error: '',
    helperText: 'Helper text',
    onReset: undefined,
    onChange: undefined,
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: textFieldArgTypes,
};

export default meta;
type Story = StoryObj<typeof TextFieldElement>;

export const Default: Story = {
  render: args => <TextFieldElement {...args} />,
};

export const WithoutLabel: Story = {
  render: args => <TextFieldElement {...args} />,
  args: {
    label: undefined,
    iconLabel: '',
  },
};

export const Required: Story = {
  render: args => <TextFieldElement {...args} />,
  args: { required: true },
};

export const ErrorState: Story = {
  render: args => <TextFieldElement {...args} />,
  args: {
    error: 'Invalid value',
    helperText: 'Please check your input',
  },
};

export const Multiline: Story = {
  render: args => <TextFieldElement {...args} />,
  args: {
    rows: 3,
    value: 'Line 1\nLine 2\nLine 3',
    showResetButton: false,
  },
};

