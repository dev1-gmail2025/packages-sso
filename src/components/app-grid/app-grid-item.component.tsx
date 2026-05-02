import { Typography } from '@mui/material';
import React from 'react';
import { AppInfo } from '../../common';
import { ImageElement } from '../elements';
import { StackRowAlignCenter, StackRowAlignJustCenter } from '../styles';

export interface AppGridItemProps {
  app: AppInfo;
  iconSize: number;
  iconRadius: number;
  titleVariant?: 'subtitle1' | 'body1' | 'caption';
  titleColor?: string;
  showNameApps?: boolean;
  showIconApps?: boolean;
  direction?: 'row' | 'column';
}

export const AppGridItem: React.FC<AppGridItemProps> = ({
  app,
  iconSize,
  iconRadius,
  titleVariant = 'subtitle1',
  titleColor,
  showNameApps = true,
  showIconApps = true,
  direction = 'column',
}) => {
  return (
    <StackRowAlignCenter sx={{ flexDirection: direction }}>
      {showIconApps && (
        <StackRowAlignJustCenter
          sx={{ width: iconSize, height: iconSize, borderRadius: iconRadius, background: app.color }}
        >
          <ImageElement sx={{ width: iconSize * 0.56, height: iconSize * 0.56 }} url={app.icon} sizeType={'SQUARE'} />
        </StackRowAlignJustCenter>
      )}

      {showNameApps && (
        <Typography variant={titleVariant} sx={{ color: titleColor, textAlign: 'center', justifyContent: 'center' }}>
          {app.content}
        </Typography>
      )}
    </StackRowAlignCenter>
  );
};
