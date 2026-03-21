import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { noteArgTypes } from './note.argtypes';
import { NoteComponent } from './note.component';

const meta: Meta<typeof NoteComponent> = {
  title: 'Components/Composite/Note',
  component: NoteComponent,
  tags: ['autodocs'],
  args: {
    type: 'info',
    content: 'This is an info note.',
  },
  parameters: { layout: 'padded' },
  argTypes: noteArgTypes,
};

export default meta;
type Story = StoryObj<typeof NoteComponent>;

export const Default: Story = {};

export const Types: Story = {
  render: (args) => (
    <Stack spacing={2} sx={{ maxWidth: 520 }}>
      <NoteComponent {...args} type="info" content="Info message." />
      <NoteComponent {...args} type="recommend" content="Recommendation message." />
      <NoteComponent {...args} type="warning" content="Warning message." />
      <NoteComponent {...args} type="error" content="Error message." />
    </Stack>
  ),
};

export const WithLink: Story = {
  args: {
    type: 'warning',
    content: 'Please read',
    contentHref: 'the documentation',
    href: 'https://example.com',
  },
};
