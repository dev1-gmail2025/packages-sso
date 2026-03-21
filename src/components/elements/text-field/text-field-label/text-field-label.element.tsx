import { Typography } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../../common';
import { IconElement } from '../../icon';

export interface TextFieldLabelElementProps {
  label?: string | React.ReactNode;
  iconLabel?: string;
  colorLabel?: string;
  required?: boolean;
}

export const TextFieldLabelElement: React.FC<TextFieldLabelElementProps> = ({
  label,
  iconLabel,
  colorLabel,
  required,
}) => {
  if (!label) return null;

  return (
    <Typography
      variant='subtitle1'
      sx={{
        color: colorLabel || '#595A5D',
        display: 'flex',
        alignItems: 'center',
        gap: STYLE.PADDING_GAP_ITEM_SMALL,
      }}
    >
      {iconLabel && <IconElement icon={iconLabel} sx={{ fontSize: STYLE.TEXT_FIELD.FONT_SIZE_LABEL }} />}
      {label}
      {required && <span style={{ color: 'red' }}>*</span>}
    </Typography>
  );
};
