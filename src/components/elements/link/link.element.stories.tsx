import { Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { linkArgTypes } from './link.argtypes';
import { LinkElement } from './link.element';

const meta: Meta<typeof LinkElement> = {
  title: 'Elements/Link/Link',
  component: LinkElement,
  tags: ['autodocs'],
  args: {
    children: 'Sevago Link',
    href: 'https://sevago.com.vn/',
    onClick: () => {
      window.location.href = 'https://sevago.com.vn/';
    },
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: linkArgTypes,
};

export default meta;
type Story = StoryObj<typeof LinkElement>;

export const Default: Story = {};

export const Underlines: Story = {
  render: args => (
    <Stack spacing={1}>
      <Typography variant='caption'>underline="always"</Typography>
      <LinkElement {...args} underline='always' />
      <Typography variant='caption'>underline="hover"</Typography>
      <LinkElement {...args} underline='hover' />
      <Typography variant='caption'>underline="none"</Typography>
      <LinkElement {...args} underline='none' />
    </Stack>
  ),
};
