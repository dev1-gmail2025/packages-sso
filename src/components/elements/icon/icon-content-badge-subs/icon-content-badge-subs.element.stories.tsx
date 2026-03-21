import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@mui/system';
import { iconContentBadgeSubsArgTypes } from './icon-content-badge-subs.argtypes';
import { IconContentBadgeSubsElement } from './icon-content-badge-subs.element';

const meta: Meta<typeof IconContentBadgeSubsElement> = {
  title: 'Elements/Icon/IconContentBadgeSubs',
  component: IconContentBadgeSubsElement,
  tags: ['autodocs'],
  args: {
    icon: 'inbox',
    content: 'Inbox',
    size: 'medium',
    badgeCount: 3,
    subs: [
      { id: 'all', name: 'All', badgeCount: 3, onClick: () => {} },
      { id: 'unread', name: 'Unread', badgeCount: 1, onClick: () => {} },
      { id: 'archived', name: 'Archived', badgeCount: 0, onClick: () => {} },
    ],
    idSubSelect: 'all',
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: iconContentBadgeSubsArgTypes,
};

export default meta;
type Story = StoryObj<typeof IconContentBadgeSubsElement>;

export const Default: Story = {
  render: (args) => (
    <Box sx={{ position: 'relative', height: 200 }}>
      <IconContentBadgeSubsElement {...args} />
    </Box>
  ),
};
