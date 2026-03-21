import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { ButtonElement } from '../button';
import { wrapperArgTypes } from './wrapper.argtypes';
import { WrapperElement } from './wrapper.element';

const meta: Meta<typeof WrapperElement> = {
  title: 'Elements/Wrapper/Wrapper',
  component: WrapperElement,
  tags: ['autodocs'],
  args: {
    label: 'Wrapper title',
    iconLabel: 'dashboard',
    labelSize: 'large',
    loading: false,
    direction: 'column',
    directionNodeLabel: 'row',
    height: 260,
    isTopLabel: false,
  },
  parameters: { layout: 'padded' },
  argTypes: wrapperArgTypes,
};

export default meta;
type Story = StoryObj<typeof WrapperElement>;

const Body = () => (
  <Stack spacing={1}>
    <Typography variant="body2">Content area</Typography>
    <Box sx={{ height: 120, border: '1px dashed #ddd', borderRadius: 1 }} />
  </Stack>
);

export const Default: Story = {
  render: (args) => (
    <WrapperElement
      {...args}
      nodeAction={<ButtonElement variant="outlined" content="Action" />}
      nodeLabel={<Typography variant="caption">Optional nodeLabel</Typography>}
    >
      <Body />
    </WrapperElement>
  ),
};

export const Loading: Story = {
  args: { loading: true },
  render: (args) => (
    <WrapperElement {...args} label="Loading wrapper">
      <Body />
    </WrapperElement>
  ),
};

export const Directions: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <WrapperElement {...args} direction="column" label="direction=column">
        <Body />
      </WrapperElement>
      <WrapperElement {...args} direction="row" label="direction=row">
        <Body />
      </WrapperElement>
    </Stack>
  ),
};
