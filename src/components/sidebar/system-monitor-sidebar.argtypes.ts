import type { ArgTypes } from '@storybook/react';
import type { SystemMonitorSidebarPartProps } from './system-monitor-sidebar.part';

export const systemMonitorSidebarArgTypes: Partial<ArgTypes<SystemMonitorSidebarPartProps>> = {
  position: {
    control: 'inline-radio',
    options: ['left', 'right'],
    description: 'Sidebar position.',
    table: { type: { summary: '"left" | "right"' }, defaultValue: { summary: 'left' } },
  },
  blacklist: {
    control: 'object',
    description: 'List of APP_OBJ keys to hide in sidebar.',
    table: { type: { summary: 'string[]' } },
  },
  env: {
    control: 'select',
    options: ['local', 'develop', 'staging', 'production', 'production_vps'],
    description: 'Environment used to detect currentApp from window.location.href.',
    table: { type: { summary: 'Environment' } },
  },
  showNameApps: { control: 'boolean', table: { type: { summary: 'boolean' } } },
  showIconApps: { control: 'boolean', table: { type: { summary: 'boolean' } } },
  direction: {
    control: 'inline-radio',
    options: ['row', 'column'],
    table: { type: { summary: '"row" | "column"' }, defaultValue: { summary: 'row' } },
  },
  onClickApp: { action: 'clickApp', table: { type: { summary: '(appInfo: AppInfo) => void' } } },
};
