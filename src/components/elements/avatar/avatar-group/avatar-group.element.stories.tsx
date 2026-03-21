import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { SizeProps } from '../../../../common';
import { StatusAvatar } from '../avatar-enum.enum';
import { avatarGroupArgTypes } from './avatar-group.argtypes';
import { AvatarGroupElement } from './avatar-group.element';

const meta: Meta<typeof AvatarGroupElement> = {
  title: 'Elements/Avatar/AvatarGroup',
  component: AvatarGroupElement,
  tags: ['autodocs'],
  args: {
    size: SizeProps.LARGE,
    maxAvatars: 5,
  },
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  argTypes: avatarGroupArgTypes,
};

export default meta;
type Story = StoryObj<typeof AvatarGroupElement>;

const demoItems = Array.from({ length: 9 }).map((_, idx) => ({
  url: `https://i.pravatar.cc/150?img=${idx + 1}`,
  alt: `User ${idx + 1}`,
  tooltipContent: `User ${idx + 1}`,
}));

export const Default: Story = {
  args: {
    items: demoItems,
  },
};

export const WithStatuses: Story = {
  args: {
    items: [
      {
        url: 'https://i.pravatar.cc/150?img=11',
        alt: 'Approved',
        tooltipContent: 'Approved',
        status: StatusAvatar.APPROVED,
      },
      {
        url: 'https://i.pravatar.cc/150?img=12',
        alt: 'Rejected',
        tooltipContent: 'Rejected',
        status: StatusAvatar.REJECTED,
      },
      {
        url: 'https://i.pravatar.cc/150?img=13',
        alt: 'Pending',
        tooltipContent: 'Pending',
        status: StatusAvatar.PENDING,
      },
      ...demoItems.slice(0, 6),
    ],
    maxAvatars: 6,
  },
};

export const SurplusPopover: Story = {
  render: (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ fontSize: 12, color: 'text.secondary' }}>
        Click vào <strong>+N</strong> để mở popover danh sách người còn lại.
      </Box>
      <AvatarGroupElement {...args} />
    </Box>
  ),
  args: {
    items: demoItems.map((x, idx) => ({
      ...x,
      status: idx % 3 === 0 ? StatusAvatar.APPROVED : idx % 3 === 1 ? StatusAvatar.REJECTED : StatusAvatar.PENDING,
    })),
    maxAvatars: 4,
    size: SizeProps.MEDIUM,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
        <Box sx={{ width: 140, fontSize: 12, color: 'text.secondary' }}>small</Box>
        <AvatarGroupElement {...args} size={SizeProps.SMALL} />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
        <Box sx={{ width: 140, fontSize: 12, color: 'text.secondary' }}>medium</Box>
        <AvatarGroupElement {...args} size={SizeProps.MEDIUM} />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
        <Box sx={{ width: 140, fontSize: 12, color: 'text.secondary' }}>large</Box>
        <AvatarGroupElement {...args} size={SizeProps.LARGE} />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
        <Box sx={{ width: 140, fontSize: 12, color: 'text.secondary' }}>extra_large</Box>
        <AvatarGroupElement {...args} size={SizeProps.EXTRA_LARGE} />
      </Box>
    </Box>
  ),
  args: {
    items: demoItems,
    maxAvatars: 5,
  },
  parameters: {
    layout: 'padded',
  },
};
