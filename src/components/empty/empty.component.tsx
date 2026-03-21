import { Box, Fade } from '@mui/material';
import React from 'react';
import { STYLE } from '../../common/const';
import { StackAlignJustCenter } from '../styles';

export interface EmptyComponentProps {}

export const EmptyComponent: React.FC<EmptyComponentProps> = ({}) => {
  return (
    <Fade in={true} timeout={STYLE.ANIMATION_TIME}>
      <StackAlignJustCenter sx={{ flex: 1, height: '100%', padding: STYLE.PADDING_GAP_ITEM }}>
        <Box component="img" sx={{ width: 70 }} src="/images/empty.svg" />
      </StackAlignJustCenter>
    </Fade>
  );
};
