import type { Meta, StoryObj } from '@storybook/react';
import { AvatarOnlineStatusElement } from './avatar-online-status.element';
import { avatarOnlineStatusArgTypes } from './avatar-online-status.argtypes';

const meta: Meta<typeof AvatarOnlineStatusElement> = {
  title: 'Elements/Avatar/AvatarOnlineStatus',
  component: AvatarOnlineStatusElement,
  tags: ['autodocs'],
  args: {
    size: 'extra_large',
    online: false,
  },
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  argTypes: avatarOnlineStatusArgTypes,
};

export default meta;
type Story = StoryObj<typeof AvatarOnlineStatusElement>;

export const Default: Story = {
  args: {
    url: 'https://picsum.photos/200',
    children: 'JD',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <AvatarOnlineStatusElement {...args} size="small" online={true}>
          S
        </AvatarOnlineStatusElement>
        <span style={{ fontSize: 12 }}>Small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <AvatarOnlineStatusElement {...args} size="medium" online={true}>
          M
        </AvatarOnlineStatusElement>
        <span style={{ fontSize: 12 }}>Medium</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <AvatarOnlineStatusElement {...args} size="large" online={true}>
          L
        </AvatarOnlineStatusElement>
        <span style={{ fontSize: 12 }}>Large</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <AvatarOnlineStatusElement {...args} size="extra_large" online={true}>
          XL
        </AvatarOnlineStatusElement>
        <span style={{ fontSize: 12 }}>Extra Large</span>
      </div>
    </div>
  ),
  parameters: {
    chromatic: { delay: 500 },
  },
};

export const WithImage: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <AvatarOnlineStatusElement {...args} url="https://mui.com/static/images/avatar/1.jpg" online={true} />
      <AvatarOnlineStatusElement {...args} url="https://mui.com/static/images/avatar/2.jpg" online={false} />
      <AvatarOnlineStatusElement {...args} url="https://mui.com/static/images/avatar/3.jpg" online={true} />
      <AvatarOnlineStatusElement {...args} url="https://mui.com/static/images/avatar/4.jpg" online={false} />
    </div>
  ),
  parameters: {
    chromatic: { delay: 500 },
  },
};

export const StatusComparison: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <AvatarOnlineStatusElement {...args} online={true} url="https://picsum.photos/200" />
        <span style={{ fontSize: 12, fontWeight: 600 }}>Online</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <AvatarOnlineStatusElement {...args} online={false} url="https://picsum.photos/200" />
        <span style={{ fontSize: 12, fontWeight: 600 }}>Offline</span>
      </div>
    </div>
  ),
  parameters: {
    chromatic: { delay: 500 },
  },
};
