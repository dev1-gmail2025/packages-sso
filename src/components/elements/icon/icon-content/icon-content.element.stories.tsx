import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';
import { fn } from '@storybook/test';

import { IconContentElement } from './icon-content.element';
import { iconContentArgTypes } from './icon-content.argtypes';

const meta: Meta<typeof IconContentElement> = {
  title: 'Elements/Icon/IconContent',
  component: IconContentElement,
  tags: ['autodocs'],
  args: {
    icon: 'edit',
    content: 'Edit',
    size: 'medium',
    onClick: fn(),
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: iconContentArgTypes,
};

export default meta;
type Story = StoryObj<typeof IconContentElement>;

export const Default: Story = {};

export const Sizes: Story = {
  render: args => (
    <Stack spacing={2}>
      <IconContentElement {...args} size='small' content='Small' />
      <IconContentElement {...args} size='medium' content='Medium' />
      <IconContentElement {...args} size='large' content='Large' />
    </Stack>
  ),
};

export const HiddenContent: Story = {
  args: {
    hiddenContent: true,
    icon: 'settings',
  },
};
