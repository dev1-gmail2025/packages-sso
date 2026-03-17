import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { dashedDividerArgTypes } from './dashed-divider.argtypes';
import { DashedDividerElement } from './dashed-divider.element';

const meta: Meta<typeof DashedDividerElement> = {
  title: 'Elements/Divider/DashedDivider',
  component: DashedDividerElement,
  tags: ['autodocs'],
  args: {
    orientation: 'horizontal',
    dashed: true,
    thickness: 1,
    length: '100%',
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: dashedDividerArgTypes,
};

export default meta;
type Story = StoryObj<typeof DashedDividerElement>;

export const Default: Story = {};

export const Orientations: Story = {
  render: args => (
    <Stack direction='row' spacing={4} alignItems='center'>
      <Box sx={{ flex: 1 }}>
        <Typography variant='body2' gutterBottom>
          Horizontal
        </Typography>
        <DashedDividerElement {...args} orientation='horizontal' />
      </Box>
      <Box sx={{ height: 80, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
        <Typography variant='body2'>Vertical</Typography>
        <DashedDividerElement {...args} orientation='vertical' length={60} />
      </Box>
    </Stack>
  ),
};

export const SolidVsDashed: Story = {
  render: args => (
    <Stack spacing={2}>
      <Box>
        <Typography variant='body2' gutterBottom>
          Dashed
        </Typography>
        <DashedDividerElement {...args} dashed thickness={1} />
      </Box>
      <Box>
        <Typography variant='body2' gutterBottom>
          Solid
        </Typography>
        <DashedDividerElement {...args} dashed={false} thickness={1} />
      </Box>
    </Stack>
  ),
};

export const Thickness: Story = {
  render: args => (
    <Stack spacing={2}>
      <DashedDividerElement {...args} thickness={1} />
      <DashedDividerElement {...args} thickness={2} />
      <DashedDividerElement {...args} thickness={4} />
    </Stack>
  ),
};

export const Lengths: Story = {
  render: args => (
    <Stack spacing={2}>
      <DashedDividerElement {...args} length='50%' />
      <DashedDividerElement {...args} length='75%' />
      <DashedDividerElement {...args} length='100%' />
      <DashedDividerElement {...args} length={120} />
    </Stack>
  ),
};
