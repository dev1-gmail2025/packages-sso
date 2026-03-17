import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { typographyContentCaptionArgTypes } from './typography-content-caption.argtypes';
import { TypographyContentCaption } from './typography-content-caption.component';

const meta: Meta<typeof TypographyContentCaption> = {
  title: 'Elements/Typography/TypographyContentCaption',
  component: TypographyContentCaption,
  tags: ['autodocs'],
  args: {
    content: 'Nguyễn Văn A',
    userTitleName: 'Quản trị viên',
    caption: 'Online',
  },
  parameters: { layout: 'padded' },
  argTypes: typographyContentCaptionArgTypes,
};

export default meta;
type Story = StoryObj<typeof TypographyContentCaption>;

export const Default: Story = {};

export const WithoutTitle: Story = {
  args: {
    userTitleName: undefined,
  },
};

export const ManyExamples: Story = {
  render: args => (
    <Stack spacing={2} sx={{ maxWidth: 320 }}>
      <TypographyContentCaption {...args} content='Nguyễn Văn A' caption='Staff' userTitleName='HR' />
      <TypographyContentCaption {...args} content='Hoàng Bùi' caption='Admin' userTitleName='System' />
      <TypographyContentCaption {...args} content='Trần B' caption='Offline' userTitleName={undefined} />
    </Stack>
  ),
};
