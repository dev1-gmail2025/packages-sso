import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { loadingArgTypes } from './loading.argtypes';
import { LoadingComponent } from './loading.component';

const meta: Meta<typeof LoadingComponent> = {
  title: 'Components/Composite/Loading',
  component: LoadingComponent,
  tags: ['autodocs'],
  args: {
    size: 'medium',
  },
  parameters: { layout: 'padded' },
  argTypes: loadingArgTypes,
};

export default meta;
type Story = StoryObj<typeof LoadingComponent>;

export const Default: Story = {};
