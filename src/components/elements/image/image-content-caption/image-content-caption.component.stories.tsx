import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { SizeProps } from '../../../../common';
import { imageContentCaptionArgTypes } from './image-content-caption.argtypes';
import { ImageContentCaptionComponent } from './image-content-caption.component';

const meta: Meta<typeof ImageContentCaptionComponent> = {
  title: 'Elements/Image/ImageContentCaption',
  component: ImageContentCaptionComponent,
  tags: ['autodocs'],
  args: {
    url: 'https://picsum.photos/200',
    alt: 'User avatar',
    content: 'Nguyễn Văn A',
    caption: 'Nhân viên • Phòng Kỹ thuật',
    sizeType: SizeProps.MEDIUM,
  },
  argTypes: imageContentCaptionArgTypes,
};

export default meta;
type Story = StoryObj<typeof ImageContentCaptionComponent>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="caption">Small</Typography>
        <ImageContentCaptionComponent {...args} sizeType={SizeProps.SMALL} />
      </Box>
      <Box>
        <Typography variant="caption">Medium</Typography>
        <ImageContentCaptionComponent {...args} sizeType={SizeProps.MEDIUM} />
      </Box>
      <Box>
        <Typography variant="caption">Large</Typography>
        <ImageContentCaptionComponent {...args} sizeType={SizeProps.LARGE} />
      </Box>
    </Stack>
  ),
};

export const WithUserTitleName: Story = {
  args: {
    userTitleName: 'Quản trị viên',
    content: 'Hoàng Bùi',
    caption: 'Online',
  },
};
