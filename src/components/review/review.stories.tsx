import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { reviewArgTypes } from './review.argtypes';
import { ReviewComponent } from './review.component';

const meta: Meta<typeof ReviewComponent> = {
  title: 'Components/Composite/Review',
  component: ReviewComponent,
  tags: ['autodocs'],
  args: {
    averageRating: 4.8,
    reviewCount: 123,
  },
  parameters: { layout: 'padded' },
  argTypes: reviewArgTypes,
};

export default meta;
type Story = StoryObj<typeof ReviewComponent>;

export const Default: Story = {};

export const Examples: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <ReviewComponent {...args} averageRating={5} reviewCount={999} />
      <ReviewComponent {...args} averageRating={3.4} reviewCount={12} />
      <ReviewComponent {...args} averageRating={0} reviewCount={0} />
    </Stack>
  ),
};

