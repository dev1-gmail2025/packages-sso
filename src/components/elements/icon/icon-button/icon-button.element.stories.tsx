import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Stack } from '@mui/system';
import { iconButtonArgTypes } from './icon-button.argtypes';
import { IconButtonElement } from './icon-button.element';

const meta: Meta<typeof IconButtonElement> = {
  title: 'Elements/Icon/IconButton',
  component: IconButtonElement,
  tags: ['autodocs'],
  args: {
    icon: 'close',
    size: 16,
    onClick: fn(),
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: iconButtonArgTypes,
};

export default meta;
type Story = StoryObj<typeof IconButtonElement>;

export const Default: Story = {
  render: (args) => (
    <Stack sx={{ position: 'relative', width: 240, height: 56, border: '1px solid #eee', borderRadius: 2 }}>
      <Box sx={{ p: 2, color: 'text.secondary' }}>Container demo</Box>
      <IconButtonElement {...args} />
    </Stack>
  ),
};
