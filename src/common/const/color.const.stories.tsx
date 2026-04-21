import { Box, Divider, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { STYLE } from '.';
import {
  DashedDividerElement,
  StackAlignCenterJustEnd,
  StackAlignEnd,
  StackRow,
  StackRowAlignEnd,
  StackRowJustEnd,
} from '../../components';
import * as COLORS from './color.const';
import { TYPOGRAPHY } from './style.const';

type ColorGroup = Record<string, unknown>;

const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);

const parseHex = (hex: string) => {
  const raw = hex.replace('#', '').trim();
  if (![3, 6, 8].includes(raw.length)) return undefined;
  const toByte = (h: string) => parseInt(h, 16);

  if (raw.length === 3) {
    const r = toByte(raw[0] + raw[0]);
    const g = toByte(raw[1] + raw[1]);
    const b = toByte(raw[2] + raw[2]);
    return { r, g, b, a: 1 };
  }

  if (raw.length === 6) {
    const r = toByte(raw.slice(0, 2));
    const g = toByte(raw.slice(2, 4));
    const b = toByte(raw.slice(4, 6));
    return { r, g, b, a: 1 };
  }

  // #RRGGBBAA
  const r = toByte(raw.slice(0, 2));
  const g = toByte(raw.slice(2, 4));
  const b = toByte(raw.slice(4, 6));
  const a = toByte(raw.slice(6, 8)) / 255;
  return { r, g, b, a };
};

const parseRgba = (rgba: string) => {
  const m = rgba
    .trim()
    .match(/^rgba?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(?:\s*,\s*([0-9]*\.?[0-9]+))?\s*\)$/i);
  if (!m) return undefined;
  const r = Number(m[1]);
  const g = Number(m[2]);
  const b = Number(m[3]);
  const a = m[4] === undefined ? 1 : Number(m[4]);
  if ([r, g, b, a].some((n) => Number.isNaN(n))) return undefined;
  return { r, g, b, a };
};

const relativeLuminance = ({ r, g, b }: { r: number; g: number; b: number }) => {
  const srgb = [r, g, b].map((v) => v / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
};

const parseColorOnWhite = (value: string) => {
  const bg = value.trim();
  if (bg.startsWith('linear-gradient')) return undefined;
  const rgba = bg.startsWith('rgb') ? parseRgba(bg) : undefined;
  const hex = bg.startsWith('#') ? parseHex(bg) : undefined;
  const c = rgba ?? hex;
  if (!c) return undefined;

  const a = Math.min(1, Math.max(0, c.a ?? 1));
  const r = Math.round(a * c.r + (1 - a) * 255);
  const g = Math.round(a * c.g + (1 - a) * 255);
  const b = Math.round(a * c.b + (1 - a) * 255);
  return { r, g, b };
};

const getTextColorForBackground = (background: string) => {
  const bg = background.trim();
  if (bg.startsWith('linear-gradient')) return '#FFFFFF';

  const rgb = parseColorOnWhite(bg);
  if (!rgb) return '#111827';
  const lum = relativeLuminance(rgb);
  return lum > 0.6 ? '#111827' : '#FFFFFF';
};

const sortKeys = (keys: string[]) =>
  [...keys].sort((a, b) => {
    const na = Number(a);
    const nb = Number(b);
    const aIsNum = !Number.isNaN(na) && a.trim() !== '';
    const bIsNum = !Number.isNaN(nb) && b.trim() !== '';
    if (aIsNum && bIsNum) return na - nb;
    if (aIsNum) return -1;
    if (bIsNum) return 1;
    return a.localeCompare(b);
  });

const isScaleGroup = (group: ColorGroup) => {
  const keys = Object.keys(group);
  const numericKeys = keys.filter((k) => !Number.isNaN(Number(k)));
  return numericKeys.length >= Math.max(5, Math.floor(keys.length * 0.7));
};

const ScaleRow: React.FC<{ name: string; group: Record<string, string> }> = ({ name, group }) => {
  const keys = sortKeys(Object.keys(group)).filter((k) => typeof group[k] === 'string');

  return (
    <Stack
      sx={{
        display: 'grid',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ ...TYPOGRAPHY.textMd.bold }}>{name.replaceAll('_', ' ').toUpperCase()}</Typography>
      <StackRow
        sx={{
          justifyContent: 'end',
          gridTemplateColumns: `repeat(${keys.length}, minmax(72px, 1fr))`,
        }}
      >
        {keys.map((k) => {
          const value = group[k];
          const textColor = getTextColorForBackground(value);

          return (
            <Stack
              key={k}
              sx={{
                borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.08)',
                width: '70px',
              }}
            >
              <Stack
                sx={{
                  background: value,
                  color: textColor,
                  minHeight: 50,
                  p: STYLE.PADDING_GAP_ITEM,
                  display: 'grid',
                }}
              >
                <Typography sx={{ ...TYPOGRAPHY.textXs.bold }}>{value}</Typography>
              </Stack>
              <Stack sx={{ p: STYLE.PADDING_GAP_ITEM }}>
                <Typography sx={{ ...TYPOGRAPHY.textXs.bold }}>{k}</Typography>
              </Stack>
            </Stack>
          );
        })}
      </StackRow>
      <DashedDividerElement dashed={false} />
    </Stack>
  );
};

const meta: Meta = {
  title: 'CONST/Colors',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

export const Matrix: Story = {
  render: () => {
    const groups = Object.entries(COLORS)
      .filter(([, v]) => isPlainObject(v))
      .sort(([a], [b]) => a.localeCompare(b)) as Array<[string, ColorGroup]>;

    const scaleGroups = groups.filter(([, g]) => isScaleGroup(g));

    return (
      <Stack>
        <Typography>Source: src/common/const/color.const.ts</Typography>
        <Stack>
          {scaleGroups.map(([name, group]) => (
            <ScaleRow
              key={name}
              name={name}
              group={Object.fromEntries(
                Object.entries(group).filter(([, v]) => typeof v === 'string') as Array<[string, string]>,
              )}
            />
          ))}
        </Stack>
      </Stack>
    );
  },
};
