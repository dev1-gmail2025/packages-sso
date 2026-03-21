import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { loadingOverlayArgTypes } from './loading-overlay.argtypes';
import { LoadingOverlay } from './loading-overlay.component';

const meta: Meta<typeof LoadingOverlay> = {
  title: 'Components/Composite/LoadingOverlay',
  component: LoadingOverlay,
  tags: ['autodocs'],
  args: {
    loading: true,
    size: 'medium',
    message: 'Đang tải dữ liệu...',
    showBackdrop: true,
    topOffset: 0,
  },
  parameters: { layout: 'padded' },
  argTypes: loadingOverlayArgTypes,
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

export const Default: Story = {
  render: (args) => (
    <Box sx={{ position: 'relative', height: 220, border: '1px dashed #ddd', borderRadius: 2, overflow: 'hidden' }}>
      <Stack spacing={1} sx={{ p: 2 }}>
        <Typography variant="body2">Underlying content</Typography>
        <Typography variant="caption" color="text.secondary">
          Overlay should cover this area.
        </Typography>
      </Stack>
      <LoadingOverlay {...args} />
    </Box>
  ),
};
