import { Stack, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { getLimitLineCss } from '../../../common/utils/other.util';
import { STYLE } from '../../../common';

export interface TypographyContentCaptionProps {
  sx?: SxProps<Theme>;
  content?: any; // fix
  caption?: string;
  sxContent?: SxProps<Theme>;
  sxCaption?: SxProps<Theme>;
  userTitleName?: string;
}

export const TypographyContentCaption: React.FC<TypographyContentCaptionProps> = ({
  content,
  caption,
  sx = {},
  sxContent,
  sxCaption,
  userTitleName,
}) => {
  return (
    <Stack gap={0} sx={{ ...sx }}>
      <Typography sx={{ ...getLimitLineCss(1), ...sxContent } as SxProps<Theme>}>{content}</Typography>
      {userTitleName && (
        <Typography sx={{ ...STYLE.TYPOGRAPHY.textXs.regular, ...getLimitLineCss(1) }}>{userTitleName}</Typography>
      )}
      {caption && <Typography sx={{ ...STYLE.TYPOGRAPHY.textXs.regular, ...sxCaption }}>{caption}</Typography>}
    </Stack>
  );
};
