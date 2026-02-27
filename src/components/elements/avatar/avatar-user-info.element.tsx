import { Stack, SxProps, Theme, Typography, useTheme } from '@mui/material';
import React from 'react';
import { SizeProps, STYLE } from '../../../common';
import { StackRow } from '../../styles';
import { AvatarElement } from './avatar.element';
import { getLimitLineCss } from '../../../common/utils/other.util';

export interface AvatarUserInfoProps {
  name: string;
  url?: string;
  positions?: string[];
  maxWidth?: string | number;
  isTag?: boolean;
  sxName?: SxProps<Theme>;
  sxPosition?: SxProps<Theme>;
  sizeAvatar?: SizeProps | string;
}

export const AvatarUserInfo: React.FC<AvatarUserInfoProps> = ({
  name,
  url,
  positions = [],
  maxWidth = '440px',
  isTag = false,
  sxName,
  sxPosition,
  sizeAvatar = SizeProps.LARGE,
}) => {
  const { palette } = useTheme();

  return (
    <StackRow sx={{ alignItems: 'center', gap: STYLE.PADDING_GAP_ITEM }}>
      <AvatarElement url={url} size={sizeAvatar} />
      {positions.length > 0 ? (
        <Stack sx={{ gap: 0 }}>
          <Typography
            sx={
              {
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '20px',
                ...getLimitLineCss(1),
                ...sxName,
              } as SxProps<Theme>
            }
          >
            {name}
          </Typography>

          <Typography
            variant="caption"
            sx={
              {
                ...getLimitLineCss(1),
                color: palette.text.disabled,
                maxWidth,
                ...(isTag && {
                  display: 'flex',
                  padding: '2px 4px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '4px',
                  background: ' #EFF8FF',
                  color: ' #035388',
                  width: 'fit-content',
                  ...sxPosition,
                }),
              } as SxProps<Theme>
            }
          >
            {positions.join(' / ')}
          </Typography>
        </Stack>
      ) : (
        <Typography sx={{ ...STYLE.TYPOGRAPHY.textSm.semiBold, ...getLimitLineCss(1), ...sxName } as SxProps<Theme>}>
          {name}
        </Typography>
      )}
    </StackRow>
  );
};
