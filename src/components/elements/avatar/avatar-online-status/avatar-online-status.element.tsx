import { Badge, BadgeProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { AvatarElement } from '../avatar.element';
import { COLOR, SizeProps } from '../../../../common';

export interface AvatarOnlineStatusElementProps {
  url?: string | null;
  size?: SizeProps | string;
  online?: boolean;
  children?: React.ReactNode;
}

export const OnlineBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: COLOR.COMMON.success,
    color: COLOR.COMMON.success,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const AvatarOnlineStatusElement: React.FC<AvatarOnlineStatusElementProps> = ({
  url,
  size = SizeProps.EXTRA_LARGE,
  online = false,
  children,
}) => {
  if (online) {
    return (
      <OnlineBadge overlap='circular' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant='dot'>
        <AvatarElement url={url || undefined} size={size} sx={{ backgroundColor: COLOR.COMMON.gray2 }}>
          {children}
        </AvatarElement>
      </OnlineBadge>
    );
  }

  return (
    <Badge
      overlap='circular'
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant='dot'
      sx={{
        '& .MuiBadge-badge': {
          backgroundColor: COLOR.COMMON.gray4,
          color: COLOR.COMMON.gray4,
          boxShadow: theme => `0 0 0 2px ${theme.palette.background.paper}`,
        },
      }}
    >
      <AvatarElement url={url || undefined} size={size} sx={{ backgroundColor: COLOR.COMMON.gray2 }}>
        {children}
      </AvatarElement>
    </Badge>
  );
};
