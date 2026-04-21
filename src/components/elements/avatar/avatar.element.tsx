import styled from '@emotion/styled';
import { Avatar, AvatarProps, Tooltip, TooltipProps, tooltipClasses } from '@mui/material';
import React, { ReactNode } from 'react';
import { SizeProps } from '../../../common';
import { MAP_SIZE } from '../../../common/const/style.const';

export interface AvatarElementProps extends AvatarProps {
  url?: string | null;
  size?: SizeProps | string;
  tooltipContent?: ReactNode;
}

const ArrowTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: { color: 'white' },
}));

export const AvatarElement: React.FC<AvatarElementProps> = ({
  url,
  sx = {},
  size = SizeProps.MEDIUM,
  tooltipContent,
  ...rest
}) => {
  if (tooltipContent) {
    return (
      <ArrowTooltip title={tooltipContent} arrow>
        <Avatar
          {...rest}
          src={url || ''}
          sx={{ ...MAP_SIZE[size], bgcolor: 'primary.main', ...sx, cursor: 'pointer' }}
        />
      </ArrowTooltip>
    );
  }
  return (
    <Avatar {...rest} src={url || ''} sx={{ ...MAP_SIZE[size], bgcolor: 'primary.main', ...sx, cursor: 'pointer' }} />
  );
};
