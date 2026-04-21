import { Box, Divider, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { STYLE } from '.';
import { StackRow } from '../../components';
import * as TOKENS from './style.const';

const meta: Meta = {
  title: 'Const/Style',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);

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

const RowKV: React.FC<{ k: string; v: unknown }> = ({ k, v }) => (
  <StackRow sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', px: STYLE.PADDING_GAP_ITEM }}>
    <Typography sx={{ ...STYLE.TYPOGRAPHY.textSm.bold }}>{k}</Typography>
    <Typography>{typeof v === 'string' || typeof v === 'number' ? String(v) : JSON.stringify(v)}</Typography>
  </StackRow>
);

const TypographyPreview: React.FC = () => {
  const typography = (TOKENS as Record<string, unknown>).TYPOGRAPHY as unknown;
  if (!isPlainObject(typography)) return null;

  const sizes = sortKeys(Object.keys(typography));
  const sample = 'The quick brown fox jumps over the lazy dog';

  return (
    <Stack spacing={2}>
      <Typography variant="h6">TYPOGRAPHY (preview)</Typography>
      <Stack spacing={2}>
        {sizes.map((sizeKey) => {
          const weightGroup = (typography as Record<string, unknown>)[sizeKey];
          if (!isPlainObject(weightGroup)) return null;
          const weights = sortKeys(Object.keys(weightGroup));

          return (
            <Box
              key={sizeKey}
              sx={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: 2, padding: 2, background: '#fff' }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 800, marginBottom: 1 }}>
                {sizeKey}
              </Typography>

              <Stack spacing={1.25}>
                {weights.map((w) => {
                  const css = (weightGroup as Record<string, unknown>)[w];
                  if (!isPlainObject(css)) return null;
                  const { fontSize, lineHeight, fontWeight, letterSpacing, fontFamily } = css as Record<
                    string,
                    unknown
                  >;

                  return (
                    <Box
                      key={w}
                      sx={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 2, alignItems: 'baseline' }}
                    >
                      <Typography>{w}</Typography>
                      <Box>
                        <Box
                          sx={{
                            fontFamily: typeof fontFamily === 'string' ? fontFamily : undefined,
                            fontSize: typeof fontSize === 'string' ? fontSize : undefined,
                            lineHeight: typeof lineHeight === 'string' ? lineHeight : undefined,
                            fontWeight: typeof fontWeight === 'number' ? fontWeight : undefined,
                            letterSpacing: typeof letterSpacing === 'string' ? letterSpacing : undefined,
                          }}
                        >
                          {sample}
                        </Box>
                        <Typography
                          variant="caption"
                          sx={{
                            opacity: 0.75,
                            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                          }}
                        >
                          {JSON.stringify({ fontFamily, fontSize, lineHeight, fontWeight, letterSpacing })}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export const Overview: Story = {
  render: () => {
    const entries = Object.entries(TOKENS as Record<string, unknown>).sort(([a], [b]) => a.localeCompare(b));

    const scalar = entries.filter(([, v]) => typeof v === 'string' || typeof v === 'number') as Array<
      [string, string | number]
    >;

    return (
      <Stack spacing={3}>
        <Typography variant="h5">Style tokens</Typography>
        <Typography sx={{ opacity: 0.7 }}>
          Source: <code>src/common/const/style.const.ts</code>
        </Typography>
        <Divider />

        {scalar.length ? (
          <Stack spacing={1}>
            <Typography variant="h6">Scalars</Typography>
            <Box
              sx={{
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL,
              }}
            >
              <Stack sx={{ gap: STYLE.PADDING_GAP_ITEM_SMALL }}>
                {scalar.map(([k, v]) => (
                  <RowKV key={k} k={k} v={v} />
                ))}
              </Stack>
            </Box>
          </Stack>
        ) : null}

        <Divider />
        <TypographyPreview />
      </Stack>
    );
  },
};
