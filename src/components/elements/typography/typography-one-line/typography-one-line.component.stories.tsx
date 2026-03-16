import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { typographyOneLineArgTypes } from './typography-one-line.argtypes';
import { TypographyOneLine } from './typography-limit-one-line.component';

const meta: Meta<typeof TypographyOneLine> = {
  title: 'Elements/Typography/TypographyOneLine',
  component: TypographyOneLine,
  tags: ['autodocs'],
  args: {
    content: 'This is a very long content that should be clamped to a single line in most containers.',
  },
  parameters: { layout: 'padded' },
  argTypes: typographyOneLineArgTypes,
};

export default meta;
type Story = StoryObj<typeof TypographyOneLine>;

export const Default: Story = {};

export const NarrowContainer: Story = {
  render: args => (
    <Stack sx={{ width: 220, border: '1px dashed #ddd', p: 1 }}>
      <TypographyOneLine {...args} />
    </Stack>
  ),
};
