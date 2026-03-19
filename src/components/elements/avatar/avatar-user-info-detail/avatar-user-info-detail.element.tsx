import { Stack, Typography } from '@mui/material';
import React from 'react';
import { COLOR, STYLE, SizeProps, otherUtil } from '../../../../common';
import { StackRow } from '../../../styles';
import { AvatarGroupElement } from '../avatar-group/avatar-group.element';
import { AvatarElement } from '../avatar.element';

export interface AvatarUserInfoDetailProps {
  name: string;
  url?: string;
  positions?: string[];
  maxWidth?: string | number;
  sizeAvatar?: SizeProps;
  code?: string;
  directManagers?: any[];
}

export const AvatarUserInfoDetail: React.FC<AvatarUserInfoDetailProps> = ({
  name,
  url,
  positions = [],
  maxWidth = '440px',
  sizeAvatar = SizeProps.LARGE,
  code,
  directManagers,
}) => {
  return (
    <StackRow sx={{ alignItems: 'center', gap: STYLE.PADDING_GAP_ITEM }}>
      <AvatarElement url={url} size={sizeAvatar as any} sx={{ width: 80, height: 80 }} />
      <Stack sx={{ gap: 0 }}>
        <Typography sx={{ ...STYLE.TYPOGRAPHY.textXl.bold, ...otherUtil.getLimitLineCss(1) }}>{name}</Typography>
        <StackRow sx={{ gap: STYLE.PADDING_GAP_ITEM_SMALL }}>
          <Typography
            sx={{ ...STYLE.TYPOGRAPHY.textSm.regular, ...otherUtil.getLimitLineCss(1), color: COLOR.COMMON.gray6 }}
          >
            MSNV:
          </Typography>
          <Typography sx={{ ...STYLE.TYPOGRAPHY.textSm.regular, ...otherUtil.getLimitLineCss(1) }}> {code}</Typography>
        </StackRow>
        <StackRow sx={{ gap: STYLE.PADDING_GAP_ITEM_SMALL }}>
          <Typography
            sx={{ ...STYLE.TYPOGRAPHY.textSm.regular, ...otherUtil.getLimitLineCss(1), color: COLOR.COMMON.gray6 }}
          >
            Chức vụ:
          </Typography>
          {positions.length > 0 && (
            <Typography
              sx={{
                ...otherUtil.getLimitLineCss(1),
                ...STYLE.TYPOGRAPHY.textSm.regular,
                maxWidth,
              }}
            >
              {positions.join(' / ')}
            </Typography>
          )}
        </StackRow>
        {/* Danh sách avatar quản lý trực tiếp có tooltip */}
        {directManagers && (
          <StackRow sx={{ gap: STYLE.PADDING_GAP_BUTTON }}>
            <Typography
              sx={{ ...STYLE.TYPOGRAPHY.textSm.regular, ...otherUtil.getLimitLineCss(1), color: COLOR.COMMON.gray6 }}
            >
              Quản lý trực tiếp:
            </Typography>
            <StackRow sx={{ gap: 0 }}>
              {directManagers?.map((manager, index: number) => (
                <AvatarGroupElement
                  size={SizeProps.MEDIUM}
                  key={index}
                  items={[
                    {
                      url: manager.manager.url,
                      tooltipContent: manager.manager.name,
                    },
                  ]}
                />
              ))}
            </StackRow>
          </StackRow>
        )}
      </Stack>
    </StackRow>
  );
};
