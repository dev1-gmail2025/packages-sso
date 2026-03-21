import { Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Stack } from '@mui/system';
import { ButtonElement } from '../button';
import { dialogArgTypes } from './dialog.argtypes';
import { DialogElement } from './dialog.element';

const meta: Meta<typeof DialogElement> = {
  title: 'Elements/Dialog/Dialog',
  component: DialogElement,
  tags: ['autodocs'],
  args: {
    label: 'Dialog title',
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: dialogArgTypes,
};

export default meta;
type Story = StoryObj<typeof DialogElement>;

export const WithHelp: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <ButtonElement content="Open dialog with help" onClick={() => setOpen(true)} />
        <DialogElement
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          label="Dialog có hướng dẫn"
          nodeContent={
            <Stack>
              <Typography variant="body2">Nội dung chính của dialog. Có thêm phần hướng dẫn bên dưới.</Typography>
            </Stack>
          }
          nodeHelp={
            <Stack>
              <Typography variant="body2">
                Đây là nội dung hướng dẫn thêm cho người dùng, có thể dài hơn và scroll được.
              </Typography>
              <Typography variant="body2">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
            </Stack>
          }
          buttonLeft={{
            content: 'Hủy',
            onClick: () => setOpen(false),
          }}
          buttonRight={{
            content: 'Xác nhận',
            onClick: () => setOpen(false),
          }}
        />
      </>
    );
  },
};

export const WithThreeButtons: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <ButtonElement content="Open 3-button dialog" onClick={() => setOpen(true)} />
        <DialogElement
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          label="Dialog 3 nút"
          nodeContent={<Typography variant="body2">Ví dụ dialog có 3 nút: Trở lại, Lưu nháp và Lưu.</Typography>}
          buttonLeft={{
            content: 'Trở lại',
            onClick: () => setOpen(false),
          }}
          buttonCenter={{
            content: 'Lưu nháp',
            onClick: () => setOpen(false),
          }}
          buttonRight={{
            content: 'Lưu',
            onClick: () => setOpen(false),
          }}
        />
      </>
    );
  },
};
