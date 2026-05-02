import { Stack } from '@mui/system';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { STYLE } from '../../../../common';
import { buttonIconArgTypes } from './button-icon.argtypes';
import { ButtonIconElement } from './button-icon.element';

const meta: Meta<typeof ButtonIconElement> = {
  title: 'Elements/Button/ButtonIconElement',
  component: ButtonIconElement,
  tags: ['autodocs'],
  args: {
    icon: 'edit',
    onClick: fn(),
    variant: 'outlined',
    color: 'primary',
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: buttonIconArgTypes,
};

export default meta;
type Story = StoryObj<typeof ButtonIconElement>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <Stack gap={STYLE.PADDING_GAP_LAYOUT}>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <ButtonIconElement {...args} variant="contained" />
        <ButtonIconElement {...args} variant="outlined" />
        <ButtonIconElement {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <ButtonIconElement {...args} variant="contained" sizeType={'CIRCLE'} />
        <ButtonIconElement {...args} variant="outlined" sizeType={'CIRCLE'} />
        <ButtonIconElement {...args} variant="text" sizeType={'CIRCLE'} />
      </div>
    </Stack>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  parameters: {
    chromatic: { delay: 300 },
  },
};

export const ClickCallsOnClick: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
