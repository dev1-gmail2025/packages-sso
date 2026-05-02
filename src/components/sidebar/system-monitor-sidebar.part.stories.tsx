import { Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { systemMonitorSidebarArgTypes } from './system-monitor-sidebar.argtypes';
import { SystemMonitorSidebarPart } from './system-monitor-sidebar.part';

const meta: Meta<typeof SystemMonitorSidebarPart> = {
  title: 'Pages/SystemMonitor/SystemMonitorSidebarPart',
  component: SystemMonitorSidebarPart,
  tags: ['autodocs'],
  args: {
    env: 'local' as any,
    position: 'left',
    blacklist: [],
    onClickApp: fn(),
    showNameApps: true,
    showIconApps: true,
    direction: 'row',
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: systemMonitorSidebarArgTypes,
};

export default meta;
type Story = StoryObj<typeof SystemMonitorSidebarPart>;

export const Default: Story = {
  render: (args) => (
    <Stack spacing={2} alignItems="flex-start" sx={{ height: '100vh' }}>
      <Typography variant="caption">
        Click the apps icon to open sidebar. currentApp depends on window.location.href.
      </Typography>
      <SystemMonitorSidebarPart {...args} />
    </Stack>
  ),
};
