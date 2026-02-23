import { ButtonProps, IconButton, useTheme } from '@mui/material';
import { IconElement } from '../icon';
import { OPACITY } from '../../../common/const/other.const';

export interface ButtonIconCircleElementProps extends ButtonProps {
  icon: string;
}

export const ButtonIconCircleElement: React.FC<ButtonIconCircleElementProps> = ({
  icon,
  color,
  size = 'medium',
  sx,
  ...rest
}) => {
  const { palette } = useTheme();

  if (!color) sx = { color: palette.text.primary, ...sx };

  return (
    <IconButton
      {...rest}
      sx={{
        backgroundColor: palette.divider + OPACITY[10],
        '&:hover': {
          backgroundColor: palette.divider + OPACITY[20],
          color: palette.primary.main,
        },
        ...sx,
      }}
      size={size}
    >
      <IconElement icon={icon} size={size} />
    </IconButton>
  );
};
