import { Fade, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { IconEmpty } from '../../../public/images/icons/empty';
import { COLOR, STYLE } from '../../common/const';
import { StackAlignJustCenter } from '../styles';

export interface EmptyComponentProps {
  content?: string;
  sxContent?: SxProps<Theme>;
}

export const EmptyComponent: React.FC<EmptyComponentProps> = ({ content, sxContent }) => {
  return (
    <Fade in={true} timeout={STYLE.ANIMATION_TIME}>
      <StackAlignJustCenter sx={{ flex: 1, height: '100%', padding: STYLE.PADDING_GAP_ITEM }}>
        <IconEmpty width={70} height={70} />
        {content && (
          <Typography
            sx={{ ...STYLE.TYPOGRAPHY.textSm.medium, color: COLOR.GRAY[500], textAlign: 'center', ...sxContent }}
          >
            {content}
          </Typography>
        )}
      </StackAlignJustCenter>
    </Fade>
  );
};
