import { Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { listIconContentArgTypes } from './list-icon-content.argtypes';
import { ListIconContentElement } from './list-icon-content.element';

const meta: Meta<typeof ListIconContentElement> = {
  title: 'Elements/List/ListIconContent',
  component: ListIconContentElement,
  tags: ['autodocs'],
  args: {
    titleNode: <Typography variant='subtitle2'>Menu</Typography>,
    list: [
      { icon: 'inbox', content: 'Inbox', onClick: fn() },
      { icon: 'mail', content: 'Mail', onClick: fn() },
      { icon: 'settings', content: 'Settings', onClick: fn() },
    ],
  },
  argTypes: listIconContentArgTypes,
};

export default meta;
type Story = StoryObj<typeof ListIconContentElement>;

export const Default: Story = {};

export const MoreItems: Story = {
  render: args => (
    <Stack sx={{ maxWidth: 320 }}>
      <ListIconContentElement
        {...args}
        titleNode={<Typography variant='subtitle2'>Quick actions</Typography>}
        list={[
          { icon: 'add', content: 'Create', onClick: fn() },
          { icon: 'edit', content: 'Edit', onClick: fn() },
          { icon: 'delete', content: 'Delete', onClick: fn() },
          { icon: 'share', content: 'Share', onClick: fn() },
        ]}
      />
    </Stack>
  ),
};
