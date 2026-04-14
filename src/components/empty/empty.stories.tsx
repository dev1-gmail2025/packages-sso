import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { EmptyComponent } from './empty.component';

const meta: Meta<typeof EmptyComponent> = {
  title: 'Elements/Composite/Empty',
  component: EmptyComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof EmptyComponent>;

export const Default: Story = {};
