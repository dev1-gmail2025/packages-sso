import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { systemMonitorArgTypes } from './system-monitor.argtypes';
import { SystemMonitorScreen } from './system-monitor.screen';

const meta: Meta<typeof SystemMonitorScreen> = {
  title: 'Pages/SystemMonitor/SystemMonitorScreen',
  component: SystemMonitorScreen,
  tags: ['autodocs'],
  args: {
    env: 'local' as any,
    blacklist: [],
    onClickApp: fn(),
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Dark',
      values: [
        { name: 'Dark', value: '#0b1b2b' },
        { name: 'Light', value: '#ffffff' },
      ],
    },
  },
  argTypes: systemMonitorArgTypes,
};

export default meta;
type Story = StoryObj<typeof SystemMonitorScreen>;

export const Default: Story = {
  render: (args) => (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#0b1b2b' }}>
      <SystemMonitorScreen {...args} />
    </Box>
  ),
};

export const WithBlacklist: Story = {
  args: {
    blacklist: ['SYSTEM', 'E_HIRING'],
  },
  render: (args) => (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#0b1b2b' }}>
      <SystemMonitorScreen {...args} />
    </Box>
  ),
};
