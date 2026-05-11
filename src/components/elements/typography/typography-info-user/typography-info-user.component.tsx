import { SxProps, Theme, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { STYLE, COLOR } from '../../../../common';
import { StackRow } from '../../../styles';
import { highlightYellow } from '../../text-field';
import { TagElement } from '../../tag';

export interface InfoItem {
  label: string;
  value: string | React.ReactNode;
  sxValue?: SxProps<Theme>;
  statusTag?: boolean;
}

export interface TypographyInfoGridProps {
  items: InfoItem[];
  columns?: number;
  sx?: SxProps<Theme>;
  columnGap?: string | number;
  showEmptyAsDots?: boolean;
  gridTemplateColumns?: string;
  gap?: number | string;
  highlightQuery?: string;
  direction?: 'row' | 'column';
  color?: string;
}

export const TypographyInfoUser: React.FC<TypographyInfoGridProps> = ({
  items,
  columns = 2,
  sx,
  columnGap = '60px',
  gap = STYLE.PADDING_GAP_BUTTON,
  showEmptyAsDots = true,
  gridTemplateColumns = '1.75fr 2fr',
  highlightQuery,
  direction = 'row',
  color,
}) => {
  return (
    <StackRow
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap,
        columnGap: columnGap,
        ...sx,
      }}
    >
      {items.map((item, index) => (
        <Stack
          key={index}
          sx={{
            gridTemplateColumns: direction === 'row' ? (columns === 1 ? '1fr 3fr' : gridTemplateColumns) : 'unset',
            height: 'fit-content',
            flexDirection: direction === 'column' ? 'column' : 'row',
            gap: 0,
          }}
        >
          <Typography sx={{ ...STYLE.TYPOGRAPHY.textSm.regular, color: COLOR.COMMON.gray6, flex: 1 }}>
            {highlightYellow(item.label, highlightQuery ?? '', showEmptyAsDots)}:
          </Typography>

          {item.statusTag ? (
            <TagElement
              sx={{ textTransform: 'none', width: '100%', ...sx }}
              content={item.value as string}
              type={color || 'inherit'}
            />
          ) : (
            <Typography
              sx={{ ...STYLE.TYPOGRAPHY.textSm.regular, color: COLOR.COMMON.black, flex: 1, ...item.sxValue }}
            >
              {highlightYellow(item.value, highlightQuery ?? '', showEmptyAsDots)}
            </Typography>
          )}
        </Stack>
      ))}
    </StackRow>
  );
};
