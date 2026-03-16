import type { ArgTypes } from '@storybook/react';
import type { SystemMonitorScreenProps } from './system-monitor.screen';

export const systemMonitorArgTypes: Partial<ArgTypes<SystemMonitorScreenProps>> = {
  env: {
    control: 'select',
    options: ['local', 'develop', 'staging', 'production', 'production_vps'],
    description: 'Environment used to resolve app paths.',
    table: { type: { summary: 'Environment' } },
  },
  blacklist: {
    control: 'object',
    description: 'List of APP_OBJ keys to hide.',
    table: { type: { summary: 'string[]' } },
  },
  onClickApp: {
    action: 'clickApp',
    table: { type: { summary: '(appInfo: AppInfo) => void' } },
  },
};

