import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Breadcrumbs } from './bread-cumbs';
import { breadCumbsArgTypes } from './bread-cumbs.argtypes';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: {
    content: 'System Monitor',
    showBackButton: true,
  },
  parameters: { layout: 'padded' },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: breadCumbsArgTypes,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};

export const WithoutBackButton: Story = {
  args: { showBackButton: false },
};
