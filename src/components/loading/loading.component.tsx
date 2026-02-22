import { CircularProgress, SxProps, Theme } from '@mui/material';
import { STYLE } from '../../common';
import { StackAlignJustCenter } from '../styles';

export interface LoadingComponentProps {
  color?: string;
  size?: 'large' | 'small' | 'medium';
  sx?: SxProps<Theme>;
}

export const LoadingComponent: React.FC<LoadingComponentProps> = ({ color, size = 'medium', sx = {} }) => {
  return (
    <StackAlignJustCenter sx={{ ...sx, flex: 1 }}>
      <CircularProgress size={STYLE.FONT_SIZE_LOADING[size]} sx={{ color }} />
    </StackAlignJustCenter>
  );
};
