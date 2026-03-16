import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { typographyGridInfoRowArgTypes } from './typography-grid-info-row.argtypes';
import { TypographyGridInfoRow } from './typography-grid-info-row.component';

const meta: Meta<typeof TypographyGridInfoRow> = {
  title: 'Elements/Typography/TypographyGridInfoRow',
  component: TypographyGridInfoRow,
  tags: ['autodocs'],
  args: {
    label: 'Department',
    value: 'Engineering',
    layout: 'vertical',
    columns: '1fr 2fr',
  },
  parameters: { layout: 'padded' },
  argTypes: typographyGridInfoRowArgTypes,
};

export default meta;
type Story = StoryObj<typeof TypographyGridInfoRow>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    layout: 'horizontal',
  },
};

export const ManyRows: Story = {
  render: args => (
    <Stack spacing={1}>
      <TypographyGridInfoRow {...args} label='Name' value='Nguyễn Văn A' />
      <TypographyGridInfoRow {...args} label='Phone' value='0123 456 789' />
      <TypographyGridInfoRow {...args} label='Address' value='Hà Nội, Việt Nam' />
    </Stack>
  ),
};
