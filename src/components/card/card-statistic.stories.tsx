import { Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { cardStatisticArgTypes } from './card-statistic.argtypes';
import { CardStatisticsComponent } from './card-statistic.component';
import { ICONS } from '../../common';

const meta: Meta<typeof CardStatisticsComponent> = {
  title: 'Components/CardStatistic',
  component: CardStatisticsComponent,
  tags: ['autodocs'],
  args: {
    label: 'Total users',
    count: 1280,
    color: '#1976d2',
    bgColor: '#1976d2',
    icon: ICONS.iconApps,
  },
  parameters: { layout: 'padded' },
  argTypes: cardStatisticArgTypes,
};

export default meta;
type Story = StoryObj<typeof CardStatisticsComponent>;

export const Default: Story = {};

export const WithInfo: Story = {
  render: args => (
    <CardStatisticsComponent
      {...args}
      info={
        <Typography variant='caption' color='text.secondary'>
          +12% vs last week
        </Typography>
      }
    />
  ),
};
