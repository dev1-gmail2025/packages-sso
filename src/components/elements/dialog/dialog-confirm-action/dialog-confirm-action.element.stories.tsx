import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import { SnackbarType } from '../../../../common';
import { ButtonElement } from '../../button';
import { dialogConfirmActionArgTypes } from './dialog-confirm-action.argtypes';
import { DialogConfirmActionElement } from './dialog-confirm-action.element';

const meta: Meta<typeof DialogConfirmActionElement> = {
  title: 'Elements/Dialog/DialogConfirmAction',
  component: DialogConfirmActionElement,
  tags: ['autodocs'],
  args: {
    title: 'Xác nhận hành động',
    description: 'Bạn có chắc chắn muốn thực hiện hành động này không?',
    closeText: 'Hủy',
    confirmText: 'Xác nhận',
    confirmColor: SnackbarType.ERROR,
    closeColor: SnackbarType.INFO,
    onClose: fn(),
    onConfirm: fn(),
    loading: false,
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: dialogConfirmActionArgTypes,
};

export default meta;
type Story = StoryObj<typeof DialogConfirmActionElement>;

export const Info: Story = {
  args: {
    title: 'Xác nhận thông tin',
    description: 'Đây là dialog xác nhận với màu sắc trung tính.',
    confirmColor: SnackbarType.INFO,
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <ButtonElement content='Open confirm dialog' onClick={() => setOpen(true)} />
        <DialogConfirmActionElement
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};

export const Warning: Story = {
  args: {
    title: 'Cảnh báo',
    description: 'Hành động này có thể gây ảnh hưởng tới dữ liệu của bạn.',
    confirmColor: SnackbarType.WARNING,
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <ButtonElement content='Open confirm dialog' onClick={() => setOpen(true)} />
        <DialogConfirmActionElement
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};

export const LoadingState: Story = {
  args: {
    loading: true,
    description: 'Đang xử lý, vui lòng chờ...',
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <ButtonElement content='Open confirm dialog' onClick={() => setOpen(true)} />
        <DialogConfirmActionElement
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};
