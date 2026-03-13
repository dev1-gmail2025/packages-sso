import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { buttonArgTypes } from './button.argtypes';
import { ButtonElement } from './button.element';

const meta: Meta<typeof ButtonElement> = {
  title: 'Components/Button/Button',
  component: ButtonElement,
  tags: ['autodocs'],
  args: {
    content: 'Save changes',
    onClick: fn(),
    variant: 'contained',
    color: 'primary',
  },
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  argTypes: buttonArgTypes,
};

export default meta;
type Story = StoryObj<typeof ButtonElement>;

export const Default: Story = {
  args: {
    content: 'Button',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ButtonElement {...args} variant="contained" content="Contained" />
      <ButtonElement {...args} variant="outlined" content="Outlined" />
      <ButtonElement {...args} variant="text" content="Text" />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ButtonElement {...args} color="primary" content="Primary" />
      <ButtonElement {...args} color="secondary" content="Secondary" />
      <ButtonElement {...args} color="success" content="Success" />
      <ButtonElement {...args} color="warning" content="Warning" />
      <ButtonElement {...args} color="error" content="Error" />
      <ButtonElement {...args} color="info" content="Info" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <ButtonElement {...args} size="small" content="Small" />
      <ButtonElement {...args} size="medium" content="Medium" />
      <ButtonElement {...args} size="large" content="Large" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ButtonElement {...args} startIcon="add" content="Add item" />
      <ButtonElement {...args} endIcon="arrow_forward" content="Continue" />
      <ButtonElement {...args} startIcon="save" endIcon="check" content="Save & Check" />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
    content: 'Saving...',
  },
  parameters: {
    // deterministic snapshot: spinner only
    chromatic: { delay: 300 },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    content: 'Disabled',
  },
};

export const ClickCallsOnClick: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole('button');

    await userEvent.click(btn);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

