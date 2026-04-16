import { Stack, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../common';
import { TAG_SIZE } from '../../../common/const/style.const';
import { getLimitLineCss, lightenColor } from '../../../common/utils/other.util';

export type TagType = 'success' | 'warning' | 'info' | 'secondary' | 'primary' | 'error';
export type TagSize = 'large' | 'medium' | 'small';
export type TagVariant = 'contained' | 'outlined' | 'outlined-border';

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
  width = 'fit-content',
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
              justifyContent: 'center',
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
