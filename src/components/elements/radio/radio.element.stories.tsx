import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { RadioElement } from './radio.element';
import { radioArgTypes } from './radio.argtypes';

const meta: Meta<typeof RadioElement> = {
  title: 'Elements/Radio/Radio',
  component: RadioElement,
  tags: ['autodocs'],
  args: {
    label: 'Option',
    name: 'radio',
    color: 'secondary',
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: radioArgTypes,
};

export default meta;
type Story = StoryObj<typeof RadioElement>;

export const Default: Story = {};

export const Colors: Story = {
  render: (args) => (
    <Stack spacing={1}>
      <RadioElement {...args} label="Primary" color="primary" />
      <RadioElement {...args} label="Secondary" color="secondary" />
      <RadioElement {...args} label="Success" color="success" />
      <RadioElement {...args} label="Warning" color="warning" />
      <RadioElement {...args} label="Error" color="error" />
      <RadioElement {...args} label="Info" color="info" />
    </Stack>
  ),
};
