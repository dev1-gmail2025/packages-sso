import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { SizeProps } from '../../../common';
import { imageArgTypes } from './image.argtypes';
import { ImageElement } from './image.element';
import { ImageSizeType } from './image.enum';

const meta: Meta<typeof ImageElement> = {
  title: 'Elements/Image/Image',
  component: ImageElement,
  tags: ['autodocs'],
  args: {
    url: 'https://picsum.photos/200',
    sizeType: 'CIRCLE',
    size: SizeProps.MEDIUM,
    isBorder: false,
    isWrap: false,
  },
  argTypes: imageArgTypes,
};

export default meta;
type Story = StoryObj<typeof ImageElement>;

export const Default: Story = {};

export const SizeTypes: Story = {
  render: (args) => (
    <Stack direction="row" spacing={4} alignItems="center" flexWrap="wrap">
      <Box>
        <Typography variant="caption">Circle</Typography>
        <ImageElement {...args} sizeType={'CIRCLE'} />
      </Box>
      <Box>
        <Typography variant="caption">Square</Typography>
        <ImageElement {...args} sizeType={'SQUARE'} />
      </Box>
      <Box>
        <Typography variant="caption">Full width (no radius)</Typography>
        <Box sx={{ width: 240 }}>
          <ImageElement {...args} sizeType={ImageSizeType.FULL_WIDTH} />
        </Box>
      </Box>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <Stack direction="row" spacing={4} alignItems="center" flexWrap="wrap">
      <Box>
        <Typography variant="caption">Small</Typography>
        <ImageElement {...args} size={SizeProps.SMALL} />
      </Box>
      <Box>
        <Typography variant="caption">Medium</Typography>
        <ImageElement {...args} size={SizeProps.MEDIUM} />
      </Box>
      <Box>
        <Typography variant="caption">Large</Typography>
        <ImageElement {...args} size={SizeProps.LARGE} />
      </Box>
      <Box>
        <Typography variant="caption">Extra large</Typography>
        <ImageElement {...args} size={SizeProps.EXTRA_LARGE} />
      </Box>
    </Stack>
  ),
};
