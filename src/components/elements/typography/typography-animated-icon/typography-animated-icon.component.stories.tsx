import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { typographyAnimatedIconArgTypes } from './typography-animated-icon.argtypes';
import { TypographyAnimatedIconImage } from './typography-animated-icon.component';

const meta: Meta<typeof TypographyAnimatedIconImage> = {
  title: 'Elements/Typography/TypographyAnimatedIconImage',
  component: TypographyAnimatedIconImage,
  tags: ['autodocs'],
  args: {
    placeholder: 'Kéo thả hoặc tải file để thực hiện chức năng',
    content: '',
    src: '/images/empty.svg',
    iconSize: 'large',
    loading: false,
  },
  parameters: { layout: 'padded' },
  argTypes: typographyAnimatedIconArgTypes,
};

export default meta;
type Story = StoryObj<typeof TypographyAnimatedIconImage>;

export const Default: Story = {};

export const WithContent: Story = {
  args: {
    content: 'Đã chọn file: avatar.png',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const WithoutImage: Story = {
  args: {
    src: '',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Stack spacing={2} sx={{ maxWidth: 420 }}>
      <TypographyAnimatedIconImage {...args} iconSize="small" content="Small" />
      <TypographyAnimatedIconImage {...args} iconSize="medium" content="Medium" />
      <TypographyAnimatedIconImage {...args} iconSize="large" content="Large" />
    </Stack>
  ),
};
