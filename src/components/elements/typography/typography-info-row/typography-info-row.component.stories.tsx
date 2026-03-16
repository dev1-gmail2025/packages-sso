import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { typographyInfoRowArgTypes } from './typography-info-row.argtypes';
import { TypographyInfoRow } from './typography-info-row.component';

const meta: Meta<typeof TypographyInfoRow> = {
  title: 'Elements/Typography/TypographyInfoRow',
  component: TypographyInfoRow,
  tags: ['autodocs'],
  args: {
    label: 'Status',
    value: 'Active',
    lineLimit: 1,
    isColumn: false,
  },
  parameters: { layout: 'padded' },
  argTypes: typographyInfoRowArgTypes,
};

export default meta;
type Story = StoryObj<typeof TypographyInfoRow>;

export const Default: Story = {};

export const Column: Story = {
  args: {
    isColumn: true,
    value: 'This is a longer value to show how it wraps when stacked in a column layout.',
    lineLimit: 2,
  },
};

export const ManyRows: Story = {
  render: args => (
    <Stack gap={1}>
      <TypographyInfoRow {...args} label='Name' value='Nguyễn Văn A' />
      <TypographyInfoRow {...args} label='Email' value='a.nguyen@example.com' />
      <TypographyInfoRow {...args} label='Role' value='Admin' />
    </Stack>
  ),
};
