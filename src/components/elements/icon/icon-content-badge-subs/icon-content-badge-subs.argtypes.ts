import type { ArgTypes } from '@storybook/react';
import type { IconContentBadgeSubsElementProps } from './icon-content-badge-subs.element';

export const iconContentBadgeSubsArgTypes: Partial<ArgTypes<IconContentBadgeSubsElementProps>> = {
  icon: { control: 'text' },
  content: { control: 'text' },
  size: { control: 'select', options: ['small', 'medium', 'large'] },
  badgeCount: { control: { type: 'number', min: 0, max: 999, step: 1 } },
  idSubSelect: { control: 'text' },
  subs: { control: false },
  sx: { control: false },
  sxIcon: { control: false },
  sxText: { control: false },
};
