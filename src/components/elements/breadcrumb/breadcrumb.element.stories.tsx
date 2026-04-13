import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BreadcrumbElement } from './breadcrumb.element';

const meta: Meta<typeof BreadcrumbElement> = {
  title: 'Elements/Breadcrumb',
  component: BreadcrumbElement,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BreadcrumbElement>;

export const Default: Story = {
  args: {
    items: [{ label: 'Home' }, { label: 'Users' }, { label: 'Detail' }],
  },
};

export const WithClickableCrumbs: Story = {
  args: {
    items: [{ label: 'Home', onClick: fn() }, { label: 'Users', onClick: fn() }, { label: 'Detail' }],
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      { label: 'Home', onClick: fn() },
      { label: 'Admin', onClick: fn() },
      { label: 'Organizations', onClick: fn() },
      { label: 'Sevago', onClick: fn() },
      { label: 'SSO', onClick: fn() },
      { label: 'Breadcrumb' },
    ],
  },
};
