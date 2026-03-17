import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import { paginationArgTypes } from './pagination.argtypes';
import { PaginationElement } from './pagination.element';

const meta: Meta<typeof PaginationElement> = {
  title: 'Elements/Pagination/Pagination',
  component: PaginationElement,
  tags: ['autodocs'],
  args: {
    total: 100,
    page: 1,
    take: 10,
    openRowsPerPage: true,
    onChange: fn(),
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: paginationArgTypes,
};

export default meta;
type Story = StoryObj<typeof PaginationElement>;

export const Default: Story = {
  render: args => {
    const [state, setState] = useState({ page: args.page, take: args.take });

    return (
      <Stack spacing={1}>
        <PaginationElement
          {...args}
          page={state.page}
          take={state.take}
          onChange={next => {
            setState(next);
            args.onChange(next);
          }}
        />
        <Typography>
          Page: {state.page} - Take: {state.take} - Total: {args.total}
        </Typography>
      </Stack>
    );
  },
};
