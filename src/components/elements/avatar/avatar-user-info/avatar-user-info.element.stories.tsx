import type { Meta, StoryObj } from '@storybook/react';
import { AvatarUserInfo } from './avatar-user-info.element';
import { avatarUserInfoArgTypes } from './avatar-user-info.argtypes';

const meta: Meta<typeof AvatarUserInfo> = {
  title: 'Elements/Avatar/AvatarUserInfo',
  component: AvatarUserInfo,
  tags: ['autodocs'],
  args: {
    name: 'John Doe',
    sizeAvatar: 'large',
  },
  parameters: {
    layout: 'padded',
    chromatic: { disableSnapshot: false },
  },
  argTypes: avatarUserInfoArgTypes,
};

export default meta;
type Story = StoryObj<typeof AvatarUserInfo>;

export const Default: Story = {
  args: {
    name: 'John Doe',
    url: 'https://picsum.photos/200',
    positions: ['Software Engineer', 'Frontend Developer'],
  },
};

export const WithTag: Story = {
  args: {
    name: 'Bob Wilson',
    url: 'https://picsum.photos/200',
    positions: ['Senior Developer', 'Tech Lead'],
    isTag: true,
  },
};

export const WithoutImage: Story = {
  args: {
    name: 'Charlie Davis',
    positions: ['Designer', 'UI/UX Specialist'],
  },
};

export const Sizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <AvatarUserInfo {...args} name='Small Avatar' sizeAvatar='small' url='https://picsum.photos/200' />
      <AvatarUserInfo {...args} name='Medium Avatar' sizeAvatar='medium' url='https://picsum.photos/200' />
      <AvatarUserInfo {...args} name='Large Avatar' sizeAvatar='large' url='https://picsum.photos/200' />
      <AvatarUserInfo {...args} name='Extra Large Avatar' sizeAvatar='extra_large' url='https://picsum.photos/200' />
    </div>
  ),
};

export const LongName: Story = {
  args: {
    name: 'Very Long Name That Should Be Truncated',
    url: 'https://picsum.photos/200',
    positions: ['Position Title'],
  },
};

export const WithCustomMaxWidth: Story = {
  args: {
    name: 'Michael Chen',
    url: 'https://picsum.photos/200',
    positions: ['Very Long Position Title That Needs Custom Width'],
    maxWidth: '200px',
  },
};

export const NameOnly: Story = {
  args: {
    name: 'David Lee',
    url: 'https://picsum.photos/200',
    positions: [],
  },
};
