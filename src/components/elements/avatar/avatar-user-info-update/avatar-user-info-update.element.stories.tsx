import type { Meta, StoryObj } from '@storybook/react';
import React, { useMemo, useState } from 'react';
import { Box, Button, Paper, Stack } from '@mui/material';
import { fn } from '@storybook/test';
import { AvatarUserInfoUpdate } from './avatar-user-info-update.element';
import { avatarUserInfoUpdateArgTypes } from './avatar-user-info-update.argtypes';
import type { FileWithPreview } from '../../../../common/interfaces/file.interface';

const meta: Meta<typeof AvatarUserInfoUpdate> = {
  title: 'Elements/Avatar/AvatarUserInfoUpdate',
  component: AvatarUserInfoUpdate,
  tags: ['autodocs'],
  args: {
    title: 'Ảnh đại diện',
    nameFile: 'PNG, JPG dưới 5MB',
    loading: false,
    onChange: fn(),
  },
  parameters: {
    layout: 'padded',
    chromatic: { disableSnapshot: false },
  },
  argTypes: avatarUserInfoUpdateArgTypes,
};

export default meta;
type Story = StoryObj<typeof AvatarUserInfoUpdate>;

export const Default: Story = {
  args: {
    url: 'https://i.pravatar.cc/160?img=55',
  },
};

export const LoadingOverlay: Story = {
  args: {
    url: 'https://i.pravatar.cc/160?img=56',
    loading: true,
  },
  parameters: {
    chromatic: { delay: 800 },
  },
};

const ControlledDemo: React.FC<React.ComponentProps<typeof AvatarUserInfoUpdate>> = (props) => {
  const [url, setUrl] = useState<any>(props.url);

  const mockFile = useMemo(() => {
    const file = new File([''], 'avatar.png', { type: 'image/png' });
    return Object.assign(file, { preview: 'https://i.pravatar.cc/160?img=57' }) as FileWithPreview;
  }, []);

  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={2}>
        <AvatarUserInfoUpdate
          {...props}
          url={url}
          onChange={(file) => {
            props.onChange?.(file as any);
            if (!file) {
              setUrl(undefined);
              return;
            }
            // AvatarUserInfoUpdate expects FileWithPreviewOrUrl, keep the object to mimic real flow.
            setUrl(file);
          }}
        />

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setUrl('https://i.pravatar.cc/160?img=58');
            }}
          >
            Set URL
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              setUrl({ url: 'https://i.pravatar.cc/160?img=59', name: 'from-api.png' });
            }}
          >
            Set FileFromApi
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              setUrl(mockFile);
            }}
          >
            Set FileWithPreview
          </Button>
          <Button
            color="error"
            variant="text"
            size="small"
            onClick={() => {
              setUrl(undefined);
            }}
          >
            Clear
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};

export const Controlled: Story = {
  render: (args) => <ControlledDemo {...args} url="https://i.pravatar.cc/160?img=55" />,
  parameters: {
    layout: 'centered',
  },
};
