import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { ButtonUploadFileElement } from './button-upload-file.element';

const meta: Meta<typeof ButtonUploadFileElement> = {
  title: 'Elements/Button/ButtonUploadFileElement',
  component: ButtonUploadFileElement,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
    multiple: false,
    accept: 'image/*',
  },
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonUploadFileElement>;

export const Default: Story = {};

export const AcceptVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ButtonUploadFileElement {...args} accept="image/*" />
      <ButtonUploadFileElement {...args} accept=".pdf,.png,.jpg" />
    </div>
  ),
};

export const UploadCallsOnChange: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // MUI ButtonIconElement renders a <button>
    const trigger = canvas.getByRole('button');
    await userEvent.click(trigger);

    const input = canvasElement.querySelector('input[type="file"]') as HTMLInputElement | null;
    await expect(input).not.toBeNull();

    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    await userEvent.upload(input!, file);

    await expect(args.onChange).toHaveBeenCalledTimes(1);
    const firstCallArg = (args.onChange as any).mock.calls[0][0];
    await expect(firstCallArg[0].name).toBe('hello.png');
  },
};
