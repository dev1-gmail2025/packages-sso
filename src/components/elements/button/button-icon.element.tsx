import { Button, ButtonProps } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../common';
import { LoadingComponent } from '../../loading';
import { IconElement } from '../icon';

export interface ButtonIconElementProps extends ButtonProps {
  icon: string;
  permission?: boolean;
}

export const ButtonIconElement: React.FC<ButtonIconElementProps> = ({ loading, icon, permission, ...rest }) => {
  if (permission === false) return null;
  return (
    <Button
      {...rest}
      endIcon={<IconElement icon={icon} sx={{ cursor: 'pointer' }} />}
      sx={{
        fontSize: 15,
        textTransform: 'none',
        borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
        width: STYLE.HEIGHT_DEFAULT_TEXT_FIELD_BUTTON,
        minWidth: 'unset',
        '& > .MuiButton-endIcon': {
          margin: 0,
        },
        ...rest.sx,
      }}
    >
      {loading && <LoadingComponent color="primary" size="small" sx={{ minHeight: '24.5px' }} />}
    </Button>
  );
};
