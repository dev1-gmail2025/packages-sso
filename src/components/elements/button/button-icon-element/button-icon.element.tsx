import { Button, ButtonProps } from '@mui/material';
import { STYLE } from '../../../../common';
import { LoadingComponent } from '../../../loading';
import { IconElement } from '../../icon';
import { ImageSizeType } from '../../image';

export interface ButtonIconElementProps extends ButtonProps {
  icon: string;
  loading?: boolean;
  permission?: boolean;
  sizeType?: ImageSizeType;
}

export const ButtonIconElement: React.FC<ButtonIconElementProps> = ({
  icon,
  loading = false,
  permission,
  sizeType = ImageSizeType.SQUARE,
  sx,
  ...rest
}) => {
  if (permission === false) return null;

  return (
    <Button
      {...rest}
      sx={{
        textTransform: 'none',
        borderRadius:
          sizeType === ImageSizeType.CIRCLE
            ? '50%'
            : sizeType === ImageSizeType.SQUARE
              ? STYLE.BORDER_RADIUS_ELEMENT_SMALL
              : 0,
        width: STYLE.HEIGHT_TEXT_FIELD_BUTTON.medium,
        minWidth: 'unset',
        ...sx,
      }}
    >
      {loading ? (
        <LoadingComponent color="primary" size="small" sx={{ minHeight: 24.5 }} />
      ) : (
        <IconElement icon={icon} sx={{ height: 24.5 }} />
      )}
    </Button>
  );
};
