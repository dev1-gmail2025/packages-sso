import { Button, ButtonProps, Typography } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../../common';
import { LoadingComponent } from '../../../loading';
import { IconElement } from '../../icon';

export interface ButtonIconContentOpacityElementProps extends ButtonProps {
  loading?: boolean;
  icon: string;
  content: any;
  isQuare?: boolean;
  permission?: boolean;
}

export const ButtonIconContentOpacityElement: React.FC<ButtonIconContentOpacityElementProps> = ({
  loading,
  icon,
  content,
  isQuare = false,
  variant = 'outlined',
  permission,
  ...rest
}) => {
  if (permission === false) return null;
  return (
    <Button
      {...rest}
      variant={variant}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        fontSize: 15,
        textTransform: 'none',
        borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
        minWidth: 'unset',
        ...(isQuare
          ? {
              minWidth: STYLE.HEIGHT_DEFAULT_TEXT_FIELD_BUTTON,
              width: STYLE.HEIGHT_DEFAULT_TEXT_FIELD_BUTTON,
            }
          : {}),
        position: 'relative',
        overflow: 'hidden',
        // swap content <-> icon on hover (stable alignment)
        '& .btnContent': {
          opacity: 1,
          transform: 'translateY(0)',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        },
        '& .btnIcon': {
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transform: 'translateY(2px)',
          pointerEvents: 'none',
        },
        '&:hover .btnContent': {
          opacity: 0,
          transform: 'translateY(-2px)',
        },
        '&:hover .btnIcon': {
          opacity: 1,
          transform: 'translateY(0)',
        },
        '&:active .btnIcon': {
          transform: 'translateY(0) scale(0.98)',
        },
        ...rest.sx,
      }}
    >
      {loading ? (
        <LoadingComponent color="primary" size="small" sx={{ minHeight: '24.5px' }} />
      ) : (
        <React.Fragment>
          <span className="btnIcon">
            <IconElement icon={icon} size="medium" sx={{ fontSize: 18 }} />
          </span>
          <Typography className="btnContent" sx={{ display: 'inline-flex', alignItems: 'center' }}>
            {content}
          </Typography>
        </React.Fragment>
      )}
    </Button>
  );
};
