import { Divider, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { COLOR, STYLE } from '.';
import { ImageElement, StackRow } from '../../components';
import { ICONS } from './icons.const';

const meta: Meta = {
  title: 'Const/Icons',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const IconGrid: React.FC<{ title: string; keys: string[] }> = ({ title, keys }) => {
  return (
    <Stack
      sx={{ bgcolor: COLOR.GRAY[200], p: STYLE.PADDING_GAP_LAYOUT, borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL }}
    >
      <Typography variant="h6">{title}</Typography>
      <StackRow sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {keys.map((k) => {
          const src = (ICONS as Record<string, string>)[k];
          return (
            <Stack key={k}>
              <ImageElement url={src} sx={{ width: 'fit-content', height: 'fit-content' }} sizeType={'SQUARE'} />
              <Typography>{k}</Typography>
            </Stack>
          );
        })}
      </StackRow>
    </Stack>
  );
};

export const Gallery: Story = {
  render: () => {
    const keys = Object.keys(ICONS).sort((a, b) => a.localeCompare(b));
    const logos = keys.filter((k) => k.toLowerCase().startsWith('logo'));
    const icons = keys.filter((k) => !k.toLowerCase().startsWith('logo'));

    return (
      <Stack>
        <Typography>Icons</Typography>
        <Typography>Source: src/common/const/icons.const.ts</Typography>
        <Divider />

        {logos.length ? <IconGrid title="Logos" keys={logos} /> : null}
        {icons.length ? (
          <>
            <Divider />
            <IconGrid title="App icons" keys={icons} />
          </>
        ) : null}
      </Stack>
    );
  },
};
