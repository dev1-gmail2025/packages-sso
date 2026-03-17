import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { userInfoArgTypes } from './user-info.argtypes';
import { UserInfo } from './user-info.element';

const meta: Meta<typeof UserInfo> = {
  title: 'Elements/User/UserInfo',
  component: UserInfo,
  tags: ['autodocs'],
  args: {
    name: 'Nguyễn Văn A',
    department: 'Engineering',
    icon: 'person',
  },
  parameters: { layout: 'padded' },
  argTypes: userInfoArgTypes,
};

export default meta;
type Story = StoryObj<typeof UserInfo>;

export const Default: Story = {};

export const WithoutDepartment: Story = {
  args: {
    department: '',
  },
};

export const Icons: Story = {
  render: args => (
    <Stack spacing={2}>
      <UserInfo {...args} icon='person' name='User' department='Dept' />
      <UserInfo {...args} icon='admin_panel_settings' name='Admin' department='IT' />
      <UserInfo {...args} icon='badge' name='Staff' department='HR' />
    </Stack>
  ),
};
