import type { Meta, StoryObj } from '@storybook/react';

import { TextFieldEmailAutocomplete } from './text-field-email-autocomplete.element';
import { textFieldEmailAutocompleteArgTypes } from './text-field-email-autocomplete.argtypes';

const meta: Meta<typeof TextFieldEmailAutocomplete> = {
  title: 'Elements/TextField/TextFieldEmailAutocomplete',
  component: TextFieldEmailAutocomplete,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    name: 'emails',
    label: 'To',
    iconLabel: 'alternate_email',
    placeholder: 'Nhập email...',
    value: ['a@company.com'],
    disabled: false,
  },
  argTypes: textFieldEmailAutocompleteArgTypes,
};

export default meta;
type Story = StoryObj<typeof TextFieldEmailAutocomplete>;

export const Default: Story = {
  render: (args) => <TextFieldEmailAutocomplete {...args} />,
};

export const Disabled: Story = {
  render: (args) => <TextFieldEmailAutocomplete {...args} />,
  args: {
    disabled: true,
  },
};

export const EmptyInitial: Story = {
  render: (args) => <TextFieldEmailAutocomplete {...args} />,
  args: {
    value: [],
  },
};
