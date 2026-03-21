import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Mode, type AppInfo } from '../../common';
import { APP_OBJ } from '../../common/const/apps.const';
import { appGridArgTypes } from './app-grid.argtypes';
import { AppGrid } from './app-grid.component';

const mockApps: AppInfo[] = Object.entries(APP_OBJ)
  .map(([key, app]) => ({
    id: key,
    content: app.content,
    icon: app.icon,
    group: app.group,
    color: app.color,
    hidden: false,
  }))
  .slice(0, 14) as any;

const meta: Meta<typeof AppGrid> = {
  title: 'Components/AppGrid',
  component: AppGrid,
  tags: ['autodocs'],
  args: {
    apps: mockApps,
    columns: 5,
    rows: 2,
    iconSize: 72,
    iconRadius: 8,
    showPagination: true,
    isShowAppHidden: true,
    onClickApp: fn(),
  },
  parameters: {
    defaultTheme: Mode.DARK,
    values: [
      { name: 'Light', value: Mode.LIGHT },
      { name: 'Dark', value: Mode.DARK },
    ],
    layout: 'padded',
  },
  argTypes: appGridArgTypes,
};

export default meta;
type Story = StoryObj<typeof AppGrid>;

export const Default: Story = {
  render: (args) => (
    <Box sx={{ backgroundColor: '#0b1b2b', py: '50px' }}>
      <AppGrid {...args} />
    </Box>
  ),
};
