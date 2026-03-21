import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ButtonImageElement } from './button-image.element';
import { ICONS } from '../../../../common/const/icons.const';
import { buttonImageArgTypes } from './button-image.argtypes';

const meta: Meta<typeof ButtonImageElement> = {
  title: 'Elements/Button/ButtonImageElement',
  component: ButtonImageElement,
  tags: ['autodocs'],
  args: {
    content: 'Open app',
    onClick: fn(),
    variant: 'outlined',
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: buttonImageArgTypes,
};

export default meta;
type Story = StoryObj<typeof ButtonImageElement>;

export const Default: Story = {};

export const WithImages: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ButtonImageElement {...args} startIcon={ICONS.iconApps} content="Apps" />
      <ButtonImageElement {...args} startIcon={ICONS.iconHR} endIcon={ICONS.iconSystem} content="HR System" />
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ButtonImageElement {...args} variant="contained" startIcon={ICONS.iconApps} content="Contained" />
      <ButtonImageElement {...args} variant="outlined" startIcon={ICONS.iconApps} content="Outlined" />
      <ButtonImageElement {...args} variant="text" startIcon={ICONS.iconApps} content="Text" />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
    content: 'Loading...',
  },
  parameters: {
    chromatic: { delay: 600 },
  },
};
