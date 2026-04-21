import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextFieldSelectElement } from './text-field-select.element';
import { textFieldSelectArgTypes } from './text-field-select.argtypes';

const meta: Meta<typeof TextFieldSelectElement> = {
  title: 'Elements/TextField/TextFieldSelect',
  component: TextFieldSelectElement,
  tags: ['autodocs'],
  args: {
    name: 'field',
    label: 'Field label',
    iconLabel: 'edit',
    placeholder: 'Chọn...',
    value: '',
    required: false,
    disabled: false,
    error: '',
    helperText: 'Helper text',
    options: [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' },
    ],
    multiple: false,
    showAvatar: false,
    onChange: undefined,
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: textFieldSelectArgTypes,
};

export default meta;
type Story = StoryObj<typeof TextFieldSelectElement>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<any>(args.value ?? '');

    return (
      <TextFieldSelectElement
        {...args}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          args.onChange?.(event);
        }}
      />
    );
  },
};

export const WithoutLabel: Story = {
  ...Default,
  args: {
    label: undefined,
    iconLabel: '',
  },
};

export const Required: Story = {
  ...Default,
  args: { required: true },
};

export const ErrorState: Story = {
  ...Default,
  args: {
    error: 'Invalid value',
    helperText: 'Please check your input',
  },
};

export const Multiple: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<any[]>(Array.isArray(args.value) ? args.value : []);

    return (
      <TextFieldSelectElement
        {...args}
        multiple
        value={value}
        onChange={(event) => {
          setValue(event.target.value as unknown as any[]);
          args.onChange?.(event);
        }}
      />
    );
  },
  args: {
    value: [],
  },
};

export const WithDisabledOption: Story = {
  ...Default,
  args: {
    value: 'b',
    getOptionDisabled: (option: any) => option?.value === 'b',
  },
};

export const WithAvatar: Story = {
  ...Default,
  args: {
    showAvatar: true,
    options: [
      { label: 'Alice', value: 'alice', url: 'https://i.pravatar.cc/64?img=1' },
      { label: 'Bob', value: 'bob', url: 'https://i.pravatar.cc/64?img=2' },
      { label: 'Charlie', value: 'charlie', url: 'https://i.pravatar.cc/64?img=3' },
    ],
  },
};
