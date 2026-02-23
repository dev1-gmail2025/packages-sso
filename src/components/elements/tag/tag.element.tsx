import { Stack, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { COLOR, STYLE } from '../../../common';
import { getLimitLineCss } from '../../../common/utils/other.util';
import { TAG_SIZE } from '../../../common/const/style.const';

export type TagType = 'success' | 'warning' | 'info' | 'secondary' | 'primary' | 'error';
export type TagSize = 'large' | 'medium' | 'small';
export type TagVariant = 'contained' | 'outlined' | 'outlined-border';

export const lightenColor = (hex?: string, percent: number = 0): string => {
  if (!hex || !/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex)) {
    return COLOR.COMMON.white;
  }

  let r: number, g: number, b: number;

  if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  } else {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }

  r = Math.round(r + (255 - r) * percent);
  g = Math.round(g + (255 - g) * percent);
  b = Math.round(b + (255 - b) * percent);

  return `rgb(${r}, ${g}, ${b})`;
};

export interface TagElementProps {
  type: string;
  content: string;
  width?: number;
  sx?: SxProps<Theme>;
  variation?: 'body1' | 'caption';
  variant?: TagVariant;
  size?: TagSize;
  color?: string;
  iconProps?: React.ReactNode;
}

export const TagElement: React.FC<TagElementProps> = ({
  type,
  content,
  width,
  variation = 'caption',
  size = 'medium',
  variant = 'contained',
  sx,
  color,
  iconProps,
}) => {
  const TAG_VARIANT = {
    contained: {
      backgroundColor: type,
      color: color || 'white',
    },
    outlined: {
      backgroundColor: lightenColor(type, 0.8),
      color: type,
    },
    'outlined-border': {
      backgroundColor: lightenColor(type, 0.8),
      border: `1px solid ${type}`,
      color: type,
    },
  };

  return (
    <>
      {iconProps ? (
        <Stack
          sx={{
            borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL,
            width,
            textAlign: 'center',
            textWrap: 'nowrap',
            ...TAG_SIZE[size],
            ...TAG_VARIANT[variant],
            ...sx,
          }}
        >
          {iconProps && iconProps}
          <Typography variant={variation}>{content}</Typography>
        </Stack>
      ) : (
        <Typography
          variant={variation}
          sx={
            {
              borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL,
              width,
              textAlign: 'center',
              textWrap: 'nowrap',
              ...getLimitLineCss(1),
              ...TAG_SIZE[size],
              ...TAG_VARIANT[variant],
              ...sx,
            } as SxProps<Theme>
          }
        >
          {content}
        </Typography>
      )}
    </>
  );
};
