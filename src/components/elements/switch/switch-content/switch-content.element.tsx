import { SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../../common';
import { StackRowAlignCenter } from '../../../styles';
import { SwitchElement } from '../switch.element';

export interface SwitchContentElementProps {
  name?: string;
  content: string;
  value?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
  sx?: SxProps<Theme>;
}

export const SwitchContentElement: React.FC<SwitchContentElementProps> = ({
  name,
  content,
  value = false,
  onChange,
  sx = {},
}) => {
  return (
    <StackRowAlignCenter sx={{ gap: STYLE.PADDING_GAP_ITEM, ...sx }}>
      <Typography>{content}</Typography>
      <SwitchElement name={name} value={value} onChange={onChange} />
    </StackRowAlignCenter>
  );
};
