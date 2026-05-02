import { Button, ButtonProps } from '@mui/material';
import { STYLE } from '../../../../common';
import { LoadingComponent } from '../../../loading';
import { IconElement } from '../../icon';

export interface ButtonIconElementProps extends ButtonProps {
  icon: string;
  loading?: boolean;
  permission?: boolean;
  sizeType?: 'CIRCLE' | 'SQUARE' | 'FULL_WIDTH';
}

export const ButtonIconElement: React.FC<ButtonIconElementProps> = ({
  icon,
  loading = false,
  permission,
  sizeType = 'SQUARE',
  size = 'medium',
  disabled = false,
  sx,
  ...rest
}) => {
  if (permission === false) return null;

  return (
    <Button
      {...rest}
      disabled={disabled}
      size={size}
      sx={{
        textTransform: 'none',
        borderRadius: sizeType === 'CIRCLE' ? '50%' : sizeType === 'SQUARE' ? STYLE.BORDER_RADIUS_ELEMENT_SMALL : 0,
        minWidth: 'unset',
        width: STYLE.HEIGHT_TEXT_FIELD_BUTTON[size],
        height: STYLE.HEIGHT_TEXT_FIELD_BUTTON[size],
        ...sx,
      }}
    >
      {loading ? (
        <LoadingComponent color='primary' size={size} />
      ) : (
        <IconElement icon={icon} size={size} disabled={disabled} />
      )}
    </Button>
  );
};
