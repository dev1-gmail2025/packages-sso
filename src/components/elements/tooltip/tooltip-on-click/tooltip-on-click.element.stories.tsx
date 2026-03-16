import { Button, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import { tooltipOnClickArgTypes } from './tooltip-on-click.argtypes';
import { TooltipOnClickElement } from './tooltip-on-click.element';

const meta: Meta<typeof TooltipOnClickElement> = {
  title: 'Elements/Tooltip/TooltipOnClick',
  component: TooltipOnClickElement,
  tags: ['autodocs'],
  args: {
    content: 'Click-away tooltip',
    placement: 'top',
    onClickAway: fn(),
    children: <Button variant='outlined'>Click me</Button>,
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: tooltipOnClickArgTypes,
};

export default meta;
type Story = StoryObj<typeof TooltipOnClickElement>;

export const Default: Story = {
  render: args => {
    const [open, setOpen] = useState(false);

    return (
      <Stack spacing={2} alignItems='flex-start'>
        <Typography variant='caption'>Click button to toggle. Click outside to close.</Typography>
        <TooltipOnClickElement
          {...args}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          onClickAway={() => {
            setOpen(false);
            args.onClickAway?.();
          }}
        >
          <Button variant='outlined' onClick={() => setOpen(v => !v)}>
            {open ? 'Opened' : 'Closed'}
          </Button>
        </TooltipOnClickElement>
      </Stack>
    );
  },
};
