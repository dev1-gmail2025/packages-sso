import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DirectionProps, VariantProps } from '../../../common';
import { tabsArgTypes } from './tabs.argtypes';
import { TabsComponent } from './tabs.component';

const meta: Meta<typeof TabsComponent> = {
  title: 'Elements/Tabs/Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
  args: {
    idSelect: 'all',
    direction: DirectionProps.ROW,
    variant: VariantProps.CONTAINED,
    tabs: [
      { id: 'all', name: 'All', icon: 'apps', onClick: fn() },
      { id: 'active', name: 'Active', icon: 'check_circle', onClick: fn() },
      { id: 'archived', name: 'Archived', icon: 'archive', onClick: fn() },
    ],
    onChange: fn(),
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: tabsArgTypes,
};

export default meta;
type Story = StoryObj<typeof TabsComponent>;

export const Default: Story = {};

export const Variants: Story = {
  render: args => (
    <Stack spacing={2}>
      <TabsComponent {...args} />
      <TabsComponent {...args} variant={VariantProps.OUTLINED} />
    </Stack>
  ),
};

export const Directions: Story = {
  render: args => (
    <Stack spacing={3}>
      <TabsComponent {...args} direction={DirectionProps.ROW} />
      <TabsComponent {...args} direction={DirectionProps.COLUMN} />
    </Stack>
  ),
};

export const WithBadges: Story = {
  render: args => (
    <Stack spacing={3}>
      <TabsComponent
        {...args}
        direction={DirectionProps.ROW}
        mode='badge'
        tabs={[
          { id: 'all', name: 'All', icon: 'apps', badgeCount: 12, onClick: fn() },
          { id: 'unread', name: 'Unread', icon: 'mark_email_unread', badgeCount: 3, onClick: fn() },
          { id: 'archived', name: 'Archived', icon: 'archive', badgeCount: 0, onClick: fn() },
        ]}
      />
      <TabsComponent
        {...args}
        direction={DirectionProps.COLUMN}
        mode='badge'
        tabs={[
          { id: 'all', name: 'All', icon: 'apps', badgeCount: 12, onClick: fn() },
          { id: 'unread', name: 'Unread', icon: 'mark_email_unread', badgeCount: 3, onClick: fn() },
          { id: 'archived', name: 'Archived', icon: 'archive', badgeCount: 0, onClick: fn() },
        ]}
      />

      <TabsComponent
        {...args}
        variant={VariantProps.OUTLINED}
        tabs={[
          { id: 'all', name: 'All', icon: 'apps', badgeCount: 12, onClick: fn() },
          { id: 'unread', name: 'Unread', icon: 'mark_email_unread', badgeCount: 3, onClick: fn() },
          { id: 'archived', name: 'Archived', icon: 'archive', badgeCount: 0, onClick: fn() },
        ]}
      />
      <TabsComponent
        {...args}
        variant={VariantProps.OUTLINED}
        direction={DirectionProps.ROW}
        tabs={[
          { id: 'all', name: 'All', icon: 'apps', badgeCount: 12, onClick: fn() },
          { id: 'unread', name: 'Unread', icon: 'mark_email_unread', badgeCount: 3, onClick: fn() },
          { id: 'archived', name: 'Archived', icon: 'archive', badgeCount: 0, onClick: fn() },
        ]}
      />
    </Stack>
  ),
};

export const WithSubs: Story = {
  render: args => (
    <Stack sx={{ height: '100px' }}>
      <TabsComponent
        {...args}
        tabs={[
          { id: 'inbox', name: 'Inbox', icon: 'inbox', onClick: fn() },
          {
            id: 'docs',
            name: 'Docs',
            icon: 'description',
            onClick: fn(),
          },
          {
            id: 'more',
            name: 'More',
            icon: 'more_horiz',
            onClick: fn(),
          },
        ]}
        getSubs={tab =>
          tab.id === 'more'
            ? [
                { id: 'settings', name: 'Settings', icon: 'settings', onClick: fn() },
                { id: 'help', name: 'Help center', icon: 'help', onClick: fn() },
              ]
            : undefined
        }
      />
    </Stack>
  ),
};

export const WithBadgesAndSubs: Story = {
  render: args => (
    <Stack sx={{ height: '100px' }}>
      <TabsComponent
        {...args}
        mode='badge'
        tabs={[
          { id: 'all', name: 'All', icon: 'apps', badgeCount: 10, onClick: fn() },
          { id: 'unread', name: 'Unread', icon: 'mark_email_unread', badgeCount: 4, onClick: fn() },
          {
            id: 'more',
            name: 'More',
            icon: 'more_horiz',
            badgeCount: 2,
            onClick: fn(),
          },
        ]}
        getSubs={tab =>
          tab.id === 'more'
            ? [
                { id: 'pinned', name: 'Pinned', icon: 'push_pin', badgeCount: 1, onClick: fn() },
                { id: 'muted', name: 'Muted', icon: 'volume_off', badgeCount: 1, onClick: fn() },
              ]
            : undefined
        }
      />
    </Stack>
  ),
};
