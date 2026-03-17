import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';
import { fn } from '@storybook/test';

import { IconContentBadgeElement } from './icon-content-badge.element';
import { iconContentBadgeArgTypes } from './icon-content-badge.argtypes';

const meta: Meta<typeof IconContentBadgeElement> = {
  title: 'Elements/Icon/IconContentBadge',
  component: IconContentBadgeElement,
  tags: ['autodocs'],
  args: {
    icon: 'notifications',
    content: 'Notifications',
    badgeCount: 12,
    onClick: fn(),
    size: 'medium',
    isAddCountToContent: false,
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: iconContentBadgeArgTypes,
};

export default meta;
type Story = StoryObj<typeof IconContentBadgeElement>;

export const Default: Story = {};

export const BadgeCounts: Story = {
  render: args => (
    <Stack spacing={2}>
      <IconContentBadgeElement {...args} badgeCount={0} content='Zero' />
      <IconContentBadgeElement {...args} badgeCount={1} content='One' />
      <IconContentBadgeElement {...args} badgeCount={12} content='Twelve' />
      <IconContentBadgeElement {...args} badgeCount={120} content='One twenty' />
    </Stack>
  ),
};

export const AddCountToContent: Story = {
  args: {
    isAddCountToContent: true,
  },
};
