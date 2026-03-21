import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { ButtonIconContentOpacityElement } from './button-icon-content-opacity.element';
import { buttonIconContentOpacityArgTypes } from './button-icon-content-opacity.argtypes';

const meta: Meta<typeof ButtonIconContentOpacityElement> = {
  title: 'Elements/Button/ButtonIconContentOpacityElement',
  component: ButtonIconContentOpacityElement,
  tags: ['autodocs'],
  args: {
    icon: 'delete',
    content: 'Delete',
    onClick: fn(),
    variant: 'outlined',
    color: 'error',
  },
  parameters: {
    layout: 'centered',
    // has CSS transitions; pauseAnimationAtEnd helps but add small delay for stability
    chromatic: { delay: 300 },
  },
  argTypes: buttonIconContentOpacityArgTypes,
};

export default meta;
type Story = StoryObj<typeof ButtonIconContentOpacityElement>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ButtonIconContentOpacityElement {...args} variant="contained" content="Contained" />
      <ButtonIconContentOpacityElement {...args} variant="outlined" content="Outlined" />
      <ButtonIconContentOpacityElement {...args} variant="text" content="Text" />
    </div>
  ),
};

export const Square: Story = {
  args: {
    isQuare: true,
    content: 'X',
  },
};

export const ClickCallsOnClick: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
