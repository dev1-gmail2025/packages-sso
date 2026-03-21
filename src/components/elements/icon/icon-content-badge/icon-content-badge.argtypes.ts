import type { ArgTypes } from '@storybook/react';
import { IconContentBadgeElementProps } from './icon-content-badge.element';

export const iconContentBadgeArgTypes: Partial<ArgTypes<IconContentBadgeElementProps>> = {
  icon: { control: 'text' },
  content: { control: 'text' },
  size: { control: 'select', options: ['small', 'medium', 'large'] },
  badgeCount: { control: { type: 'number', min: 0, max: 999, step: 1 } },
  isAddCountToContent: { control: 'boolean' },
  onClick: { action: 'clicked' },
  sx: { control: false },
  sxIcon: { control: false },
  sxText: { control: false },
  sxBadge: { control: false },
};
