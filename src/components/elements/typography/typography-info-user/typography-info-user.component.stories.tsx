import { Stack, TextField, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { typographyInfoUserArgTypes } from './typography-info-user.argtypes';
import { TypographyInfoUser } from './typography-info-user.component';

const meta: Meta<typeof TypographyInfoUser> = {
  title: 'Elements/Typography/TypographyInfoUser',
  component: TypographyInfoUser,
  tags: ['autodocs'],
  args: {
    columns: 2,
    highlightQuery: '',
    items: [
      { label: 'Full name', value: 'Nguyễn Văn A' },
      { label: 'Email', value: 'a.nguyen@example.com' },
      { label: 'Department', value: 'Engineering' },
      { label: 'Phone', value: '' },
    ],
  },
  parameters: { layout: 'padded' },
  argTypes: typographyInfoUserArgTypes,
};

export default meta;
type Story = StoryObj<typeof TypographyInfoUser>;

export const Default: Story = {};

export const WithHighlightQuery: Story = {
  render: args => {
    const [q, setQ] = useState('eng');

    return (
      <Stack spacing={2}>
        <Typography variant='caption'>Type a query to highlight:</Typography>
        <TextField value={q} onChange={e => setQ(e.target.value)} size='small' label='highlightQuery' />
        <TypographyInfoUser {...args} highlightQuery={q} />
      </Stack>
    );
  },
};
