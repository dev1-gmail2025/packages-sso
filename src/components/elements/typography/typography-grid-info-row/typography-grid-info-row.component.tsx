import { Stack, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../../common';
import { StackRow } from '../../../styles';

export interface TypographyGridInfoRowProps {
  label: string;
  value: React.ReactNode;
  sx?: SxProps<Theme>;
  lineLimit?: number;
  columns?: string;
  layout?: 'horizontal' | 'vertical';
  sxValue?: SxProps<Theme>;
  sxLabel?: SxProps<Theme>;
}

export const TypographyGridInfoRow: React.FC<TypographyGridInfoRowProps> = ({
  label,
  value,
  sx,
  columns = '1fr 2fr',
  layout = 'vertical',
  sxValue,
  sxLabel,
}) => {
  if (layout === 'vertical') {
    return (
      <React.Fragment>
        <StackRow sx={{ display: 'grid', gridTemplateColumns: columns, ...sx }}>
          <Stack>
            <Typography sx={{ ...STYLE.TYPOGRAPHY.textSm.semiBold, ...sxLabel }}>{label}</Typography>
          </Stack>
          <Stack sx={{ ...STYLE.TYPOGRAPHY.textSm.regular, ...sxValue }}>{value || 'Không có'}</Stack>
        </StackRow>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Stack sx={{ gap: 0.5, ...sx }}>
        <Typography sx={{ ...STYLE.TYPOGRAPHY.textSm.semiBold, ...sxLabel }}>{label}</Typography>
        <Stack sx={{ ...STYLE.TYPOGRAPHY.textSm.regular, ...sxValue }}>{value || 'Không có'}</Stack>
      </Stack>
    </React.Fragment>
  );
};
