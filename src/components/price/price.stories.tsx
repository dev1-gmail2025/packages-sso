import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { priceArgTypes } from './price.argtypes';
import { PriceComponent } from './price.component';

const meta: Meta<typeof PriceComponent> = {
  title: 'Components/Composite/Price',
  component: PriceComponent,
  tags: ['autodocs'],
  args: {
    price: 99.9,
    originalPrice: 149.9,
    discountPercent: 33,
    size: 'small',
    sameSize: false,
    isLineHeight1: true,
  },
  parameters: { layout: 'padded' },
  argTypes: priceArgTypes,
};

export default meta;
type Story = StoryObj<typeof PriceComponent>;

export const Default: Story = {};

export const Sizes: Story = {
  render: args => (
    <Stack spacing={2}>
      <PriceComponent {...args} size='small' />
      <PriceComponent {...args} size='medium' />
      <PriceComponent {...args} size='large' />
    </Stack>
  ),
};

export const NoOriginalPrice: Story = {
  args: {
    originalPrice: undefined,
    discountPercent: undefined,
  },
};
