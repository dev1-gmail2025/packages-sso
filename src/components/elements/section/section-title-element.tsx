import { SxProps, Theme, Typography, useTheme } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../common';
import { StackRowAlignCenter } from '../../styles';

interface SectionTitleProps {
  label: React.ReactNode;
  value?: React.ReactNode;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  value,
  children,
  sx,
  textTransform = 'uppercase',
}) => {
  const { palette } = useTheme();
  return (
    <StackRowAlignCenter sx={{ gap: 1, ...sx }}>
      <Typography
        variant='subtitle2'
        sx={{ ...STYLE.TYPOGRAPHY.textMd.semiBold, textTransform: textTransform, color: palette.primary.main }}
      >
        {label || children}
      </Typography>
      {value !== undefined && (
        <Typography
          variant='subtitle2'
          sx={{ ...STYLE.TYPOGRAPHY.textMd.semiBold, textTransform: textTransform, color: palette.primary.main }}
        >
          {value}
        </Typography>
      )}
    </StackRowAlignCenter>
  );
};
