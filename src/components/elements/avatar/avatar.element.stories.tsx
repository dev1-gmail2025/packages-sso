import type { Meta, StoryObj } from '@storybook/react';
import { AvatarElement } from './avatar.element';
import { avatarArgTypes } from './avatar.argtypes';

const meta: Meta<typeof AvatarElement> = {
  title: 'Elements/Avatar/Avatar',
  component: AvatarElement,
  tags: ['autodocs'],
  args: {
    size: 'medium',
  },
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },

  argTypes: avatarArgTypes,
};

export default meta;
type Story = StoryObj<typeof AvatarElement>;

export const Default: Story = {
  args: {
    children: 'A',
    url: 'https://picsum.photos/200',
    tooltipContent: 'John Doe',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <AvatarElement {...args} size="extra_small" url="https://picsum.photos/200">
        XS
      </AvatarElement>
      <AvatarElement {...args} size="small" url="https://picsum.photos/200">
        S
      </AvatarElement>
      <AvatarElement {...args} size="medium" url="https://picsum.photos/200">
        M
      </AvatarElement>
      <AvatarElement {...args} size="large" url="https://picsum.photos/200">
        L
      </AvatarElement>
      <AvatarElement {...args} size="extra_large" url="https://picsum.photos/200">
        XL
      </AvatarElement>
      <AvatarElement {...args} size="avatar_group" url="https://picsum.photos/200">
        AG
      </AvatarElement>
    </div>
  ),
};

export const WithImage: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <AvatarElement {...args} url="https://mui.com/static/images/avatar/1.jpg" size="small" />
      <AvatarElement {...args} url="https://mui.com/static/images/avatar/2.jpg" size="medium" />
      <AvatarElement {...args} url="https://mui.com/static/images/avatar/3.jpg" size="large" />
      <AvatarElement {...args} url="https://mui.com/static/images/avatar/4.jpg" size="extra_large" />
    </div>
  ),
};

export const WithTooltip: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <AvatarElement {...args} tooltipContent="John Doe" url="https://picsum.photos/200">
        JD
      </AvatarElement>
      <AvatarElement {...args} tooltipContent="Jane Smith" url="https://picsum.photos/200" />
      <AvatarElement {...args} tooltipContent="Admin User" url="https://picsum.photos/200">
        AU
      </AvatarElement>
    </div>
  ),
};
