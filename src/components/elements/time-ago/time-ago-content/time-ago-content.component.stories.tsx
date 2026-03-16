import type { Meta, StoryObj } from '@storybook/react';

import { TimeAgoContentComponent } from './time-ago-content.component';
import { timeAgoContentArgTypes } from './time-ago-content.argtypes';

const meta: Meta<typeof TimeAgoContentComponent> = {
  title: 'Elements/TimeAgo/TimeAgoContent',
  component: TimeAgoContentComponent,
  tags: ['autodocs'],
  args: {
    content: 'Nguyễn Văn A vừa cập nhật hồ sơ',
    time: new Date(),
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: timeAgoContentArgTypes,
};

export default meta;
type Story = StoryObj<typeof TimeAgoContentComponent>;

export const Default: Story = {};
