import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ButtonElement } from '../../button';
import { TooltipOnHoverElement } from './tooltip-on-hover.element';
import { tooltipOnHoverArgTypes } from './tooltip-on-hover.argtypes';
import { StackRow } from '../../../styles';

const meta: Meta<typeof TooltipOnHoverElement> = {
  title: 'Elements/Tooltip/TooltipOnHover',
  component: TooltipOnHoverElement,
  tags: ['autodocs'],
  args: {
    content: 'Tooltip content',
    placement: 'top',
    openTest: false,
    showCloseIcon: false,
    onCloseClick: fn(),
    children: <ButtonElement variant="outlined" content="Hover me" />,
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: tooltipOnHoverArgTypes,
};

export default meta;
type Story = StoryObj<typeof TooltipOnHoverElement>;

export const Default: Story = {};

export const Placements: Story = {
  render: (args) => (
    <StackRow>
      <TooltipOnHoverElement {...args} placement="top">
        <ButtonElement variant="outlined" content="Top" />
      </TooltipOnHoverElement>
      <TooltipOnHoverElement {...args} placement="bottom">
        <ButtonElement variant="outlined" content="Bottom" />
      </TooltipOnHoverElement>
      <TooltipOnHoverElement {...args} placement="right">
        <ButtonElement variant="outlined" content="Right" />
      </TooltipOnHoverElement>
      <TooltipOnHoverElement {...args} placement="left">
        <ButtonElement variant="outlined" content="Left" />
      </TooltipOnHoverElement>
    </StackRow>
  ),
};

export const ForcedOpenWithCloseIcon: Story = {
  args: {
    openTest: true,
    showCloseIcon: true,
    content: 'Pinned tooltip (openTest=true)',
    children: <ButtonElement variant="outlined" content="Always open" />,
  },
};
