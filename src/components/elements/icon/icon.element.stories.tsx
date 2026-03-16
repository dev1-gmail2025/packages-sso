import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { iconArgTypes } from './icon.argtypes';
import { IconElement } from './icon.element';

const meta: Meta<typeof IconElement> = {
  title: 'Elements/Icon/Icon',
  component: IconElement,
  tags: ['autodocs'],
  args: {
    icon: 'add',
    size: 'medium',
    fill: 0,
    color: 'inherit',
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: iconArgTypes,
};

export default meta;
type Story = StoryObj<typeof IconElement>;

export const Default: Story = {};

export const Sizes: Story = {
  render: args => (
    <Stack direction='row' spacing={3} alignItems='center'>
      <Box>
        <Typography variant='caption'>Small</Typography>
        <IconElement {...args} size='small' icon='add' />
      </Box>
      <Box>
        <Typography variant='caption'>Medium</Typography>
        <IconElement {...args} size='medium' icon='add' />
      </Box>
      <Box>
        <Typography variant='caption'>Large</Typography>
        <IconElement {...args} size='large' icon='add' />
      </Box>
    </Stack>
  ),
};

export const Fill: Story = {
  render: args => (
    <Stack direction='row' spacing={3} alignItems='center'>
      <Box>
        <Typography variant='caption'>FILL 0</Typography>
        <IconElement {...args} fill={0} icon='favorite' />
      </Box>
      <Box>
        <Typography variant='caption'>FILL 1</Typography>
        <IconElement {...args} fill={1} icon='favorite' />
      </Box>
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    icon: 'delete',
  },
};
