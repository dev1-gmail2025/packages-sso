import { Stack, TextField, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { highlightText, highlightYellow } from './text-highlight.element';

const meta: Meta = {
  title: 'Elements/TextField/TextHighlight',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [q, setQ] = useState('lorem');
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    return (
      <Stack spacing={2}>
        <TextField label='Query' value={q} onChange={e => setQ(e.target.value)} size='small' />

        <Stack spacing={1}>
          <Typography variant='caption'>highlightText</Typography>
          <Typography>{highlightText(text, q)}</Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography variant='caption'>highlightYellow</Typography>
          <Typography>{highlightYellow(text, q, true)}</Typography>
        </Stack>
      </Stack>
    );
  },
};
