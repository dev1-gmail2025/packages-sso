import { Box, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { wrapperCenterArgTypes } from './wrapper-center.argtypes';
import { WrapperCenterElement } from './wrapper-center.element';

const meta: Meta<typeof WrapperCenterElement> = {
  title: 'Elements/Wrapper/WrapperCenter',
  component: WrapperCenterElement,
  tags: ['autodocs'],
  args: {
    isWrap: true,
    children: (
      <Box sx={{ border: '1px dashed #ddd', borderRadius: 1, p: 2 }}>
        <Typography variant='body2'>Centered content</Typography>
      </Box>
    ),
  },
  parameters: { layout: 'padded' },
  argTypes: wrapperCenterArgTypes,
};

export default meta;
type Story = StoryObj<typeof WrapperCenterElement>;

export const Default: Story = {};
