import type { Meta, StoryObj } from '@storybook/react';
import { Box, Paper } from '@mui/material';
import { AvatarUserInfoDetail } from './avatar-user-info-detail.element';
import { avatarUserInfoDetailArgTypes } from './avatar-user-info-detail.argtypes';

const meta: Meta<typeof AvatarUserInfoDetail> = {
  title: 'Elements/Avatar/AvatarUserInfoDetail',
  component: AvatarUserInfoDetail,
  tags: ['autodocs'],
  args: {
    name: 'Nguyễn Văn A',
    code: 'NV-01234',
    url: 'https://i.pravatar.cc/160?img=21',
    positions: ['Frontend Engineer', 'Team Lead'],
  },
  parameters: {
    layout: 'padded',
    chromatic: { disableSnapshot: false },
  },
  argTypes: avatarUserInfoDetailArgTypes,
};

export default meta;
type Story = StoryObj<typeof AvatarUserInfoDetail>;

export const Default: Story = {};

export const WithDirectManagers: Story = {
  args: {
    directManagers: [
      { manager: { name: 'Manager 1', url: 'https://i.pravatar.cc/150?img=31' } },
      { manager: { name: 'Manager 2', url: 'https://i.pravatar.cc/150?img=32' } },
      { manager: { name: 'Manager 3', url: 'https://i.pravatar.cc/150?img=33' } },
    ],
  },
};

export const LongContent: Story = {
  render: (args) => (
    <Paper sx={{ p: 2, maxWidth: 720 }}>
      <AvatarUserInfoDetail {...args} />
    </Paper>
  ),
  args: {
    name: 'Tên rất dài để kiểm tra truncate ở 1 dòng của Typography (LimitLineCss)',
    code: 'NV-99999',
    positions: ['Senior Frontend Engineer', 'Platform & Design System', 'Internal Tools', 'Accessibility Champion'],
    maxWidth: '260px',
    directManagers: [
      { manager: { name: 'Manager A', url: 'https://i.pravatar.cc/150?img=41' } },
      { manager: { name: 'Manager B', url: 'https://i.pravatar.cc/150?img=42' } },
      { manager: { name: 'Manager C', url: 'https://i.pravatar.cc/150?img=43' } },
      { manager: { name: 'Manager D', url: 'https://i.pravatar.cc/150?img=44' } },
    ],
  },
};

export const ResponsivePreview: Story = {
  render: (args) => (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ fontSize: 12, color: 'text.secondary', mb: 1 }}>Container 360px</Box>
        <Box sx={{ width: 360 }}>
          <AvatarUserInfoDetail {...args} maxWidth="180px" />
        </Box>
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ fontSize: 12, color: 'text.secondary', mb: 1 }}>Container 640px</Box>
        <Box sx={{ width: 640 }}>
          <AvatarUserInfoDetail {...args} maxWidth="440px" />
        </Box>
      </Paper>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
