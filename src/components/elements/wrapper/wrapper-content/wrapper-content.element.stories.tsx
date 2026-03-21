import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { wrapperContentArgTypes } from './wrapper-content.argtypes';
import { WrapperContentElement } from './wrapper-content.element';

const meta: Meta<typeof WrapperContentElement> = {
  title: 'Elements/Wrapper/WrapperContent',
  component: WrapperContentElement,
  tags: ['autodocs'],
  args: {
    label: 'WrapperContent title',
    iconLabel: 'info',
    labelSize: 'medium',
    loading: false,
    height: 220,
    direction: 'column',
  },
  parameters: { layout: 'padded' },
  argTypes: wrapperContentArgTypes,
};

export default meta;
type Story = StoryObj<typeof WrapperContentElement>;

const Body = () => <Box sx={{ height: 120, border: '1px dashed #ddd', borderRadius: 1 }} />;

export const Default: Story = {
  render: (args) => (
    <WrapperContentElement {...args} nodeLabel={<Typography variant="caption">nodeLabel</Typography>}>
      <Body />
    </WrapperContentElement>
  ),
};

export const Loading: Story = {
  args: { loading: true },
  render: (args) => (
    <WrapperContentElement {...args} label="Loading content">
      <Body />
    </WrapperContentElement>
  ),
};

export const Directions: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <WrapperContentElement {...args} direction="column" label="direction=column">
        <Body />
      </WrapperContentElement>
      <WrapperContentElement {...args} direction="row" label="direction=row">
        <Body />
      </WrapperContentElement>
    </Stack>
  ),
};
