import { Stack, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { getLimitLineCss } from '../../../../common/utils/other.util';
import { STYLE } from '../../../../common';

export interface TypographyInfoRowProps {
  label: React.ReactNode;
  value?: React.ReactNode;
  sx?: SxProps<Theme>;
  lineLimit?: number;
  labelSx?: SxProps<Theme>;
  isColumn?: boolean;
}

export const TypographyInfoRow: React.FC<TypographyInfoRowProps> = ({
  label,
  value,
  sx = {},
  labelSx = {},
  lineLimit = 1,
  isColumn = false,
}) => {
  return (
    <Stack
      direction={isColumn ? 'column' : 'row'}
      sx={{ alignItems: 'center', gap: STYLE.PADDING_GAP_ITEM_SMALL, ...sx }}
    >
      {label && (
        <Typography sx={{ ...labelSx }} variant="subtitle1">
          {label}:
        </Typography>
      )}
      <Stack color="text.secondary" sx={{ ...getLimitLineCss(lineLimit), flex: 1 }}>
        {value || 'Không có'}
      </Stack>
    </Stack>
  );
};
