import { AvatarGroup, AvatarProps, Badge, Box, Popover, SxProps, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { SizeProps } from '../../../../common';
import { SmallIcon } from '../../../styles';
import { IconElement } from '../../icon';
import { MAP_SIZE, StatusAvatar } from '../avatar-enum.enum';
import { AvatarElement } from '../avatar.element';

interface AvatarGroupItem {
  url: string;
  tooltipContent?: React.ReactNode;
  status?: StatusAvatar;
  alt?: string;
}

export interface AvatarGroupElementProps extends AvatarProps {
  items: AvatarGroupItem[];
  sxGroup?: SxProps;
  maxAvatars?: number;
  size?: SizeProps;
  renderSurplus?: ((surplus: number) => React.ReactNode) | undefined;
  approveStatus?: string;
  rejectStatus?: string;
}

export const AvatarGroupElement: React.FC<AvatarGroupElementProps> = ({
  items = [],
  onClick,
  maxAvatars = 5,
  sx = {},
  sxGroup = {},
  size = SizeProps.LARGE,
  renderSurplus,
  approveStatus = StatusAvatar.APPROVED,
  rejectStatus = StatusAvatar.REJECTED,
  ...rest
}) => {
  const { palette } = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  if (onClick) sx = { ...sx, cursor: 'pointer' };

  const handleSurplusClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const surplusItems = items.slice(maxAvatars);
  const surplusCount = items.length - maxAvatars;

  const renderItem = (item: AvatarGroupItem, key: React.Key) => {
    if (item.status) {
      let icon = null;
      switch (item.status) {
        case approveStatus:
          icon = (
            <SmallIcon sx={{ background: palette.success.light, color: 'white' }}>
              <IconElement icon="done" color={'inherit'} size="small" />
            </SmallIcon>
          );
          break;
        case rejectStatus:
          icon = (
            <SmallIcon sx={{ background: palette.error.light, color: 'white' }}>
              <IconElement icon="close" color={'inherit'} size="small" />
            </SmallIcon>
          );
          break;
        default:
          icon = (
            <SmallIcon sx={{ background: palette.warning.light, color: 'white' }}>
              <IconElement color={'inherit'} icon="access_time" />
            </SmallIcon>
          );
          break;
      }
      return (
        <Badge key={key} overlap="circular" anchorOrigin={{ vertical: 'top', horizontal: 'left' }} badgeContent={icon}>
          <AvatarElement
            url={item.url}
            alt={item.alt || ''}
            tooltipContent={item.tooltipContent}
            size={size as any}
            sx={{ ...sx }}
            {...rest}
          />
        </Badge>
      );
    }
    return (
      <AvatarElement
        key={key}
        url={item.url}
        alt={item.alt || ''}
        tooltipContent={item.tooltipContent}
        size={size as any}
        sx={{ ...sx }}
        {...rest}
      />
    );
  };
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
      <AvatarGroup
        renderSurplus={
          renderSurplus ||
          ((surplus) => (
            <Box
              onClick={handleSurplusClick}
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: MAP_SIZE[size]?.width,
                height: MAP_SIZE[size]?.height,
                borderRadius: '50%',
                fontSize: 12,
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: palette.action.selected,
                },
              }}
            >
              +{surplus}
            </Box>
          ))
        }
        max={maxAvatars}
        sx={{
          '& .MuiAvatarGroup-avatar': {
            ...MAP_SIZE[size],
            fontSize: 10,
            cursor: 'pointer',
            fontWeight: 400,
            lineHeight: '14px',
          },
          '& .MuiAvatar-root': { border: 'none', backgroundColor: 'rgba(0, 0, 0, 0.66)' },
          ...sxGroup,
        }}
        spacing={-2}
      >
        {items?.map((item, idx) => renderItem(item, idx))}
      </AvatarGroup>

      {/* Popover for surplus users */}
      <Popover
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2, minWidth: 250 }}>
          <Typography sx={{ fontWeight: 600, mb: 2 }}>{surplusCount} người còn lại</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {surplusItems.map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AvatarElement url={item.url} alt={item.alt || ''} size="small" />
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 500 }}>{item.alt || 'N/A'}</Typography>
                  {item.tooltipContent && (
                    <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{item.tooltipContent}</Typography>
                  )}
                </Box>
                {item.status && (
                  <Box>
                    {item.status === StatusAvatar.APPROVED && (
                      <IconElement icon="done" sx={{ color: palette.success.main }} />
                    )}
                    {item.status === StatusAvatar.REJECTED && (
                      <IconElement icon="close" sx={{ color: palette.error.main }} />
                    )}
                    {item.status === StatusAvatar.PENDING && (
                      <IconElement icon="access_time" sx={{ color: palette.warning.main }} />
                    )}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};
