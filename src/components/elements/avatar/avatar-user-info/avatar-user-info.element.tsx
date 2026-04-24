import { Stack, SxProps, Theme, Typography, useTheme } from '@mui/material';
import React from 'react';
import { SizeProps, STYLE } from '../../../../common';
import { getLimitLineCss } from '../../../../common/utils/other.util';
import { StackRow } from '../../../styles';
import { AvatarElement } from '../avatar.element';

export interface AvatarUserInfoProps {
  name?: string;
  url?: string;
  positions?: string[];
  maxWidth?: string | number;
  isTag?: boolean;
  sxName?: SxProps<Theme>;
  sxPosition?: SxProps<Theme>;
  sizeAvatar?: SizeProps | string;
  onClick?: () => void;
}

export const AvatarUserInfo: React.FC<AvatarUserInfoProps> = ({
  name = 'Hệ thống',
  url,
  positions = [],
  maxWidth = '440px',
  isTag = false,
  sxName,
  sxPosition,
  sizeAvatar = SizeProps.MEDIUM,
  onClick,
}) => {
  const { palette } = useTheme();

  return (
    <StackRow sx={{ alignItems: 'center', gap: STYLE.PADDING_GAP_ITEM }} onClick={onClick}>
      <AvatarElement url={url} size={sizeAvatar} />

      <Stack sx={{ gap: 0 }}>
        <Typography sx={{ ...STYLE.TYPOGRAPHY.textSm.semiBold, ...getLimitLineCss(1), ...sxName } as SxProps<Theme>}>
          {name}
        </Typography>

        {positions.length > 0 && (
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
        )}
      </Stack>
    </StackRow>
  );
};
