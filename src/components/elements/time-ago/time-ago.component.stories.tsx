import type { Meta, StoryObj } from '@storybook/react';

import { TimeAgoComponent } from './time-ago.component';
import { timeAgoArgTypes } from './time-ago.argtypes';

const meta: Meta<typeof TimeAgoComponent> = {
  title: 'Elements/TimeAgo/TimeAgo',
  component: TimeAgoComponent,
  tags: ['autodocs'],
  args: {
    time: new Date(),
    hasText: false,
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: timeAgoArgTypes,
};

export default meta;
type Story = StoryObj<typeof TimeAgoComponent>;

export const Default: Story = {};

export const WithPrefixText: Story = {
  args: {
    hasText: true,
  },
};
