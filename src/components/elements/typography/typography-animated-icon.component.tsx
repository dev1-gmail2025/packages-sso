import { Stack, SxProps, Theme, Typography, TypographyProps, useTheme } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { STYLE } from '../../../common';
import { OPACITY } from '../../../common/const/other.const';
import { getLimitLineCss } from '../../../common/utils/other.util';
import { LoadingComponent } from '../../loading';
import { IconImageElement } from '../icon/icon-image.element';

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <motion.span
      key={text}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.span>
  );
};

export interface TypographyAnimatedIconImageProps extends TypographyProps {
  sx?: SxProps<Theme>;
  placeholder?: string;
  content?: string;
  src?: string;
  iconSize?: 'large' | 'small' | 'medium';
  loading?: boolean;
}

export const TypographyAnimatedIconImage: React.FC<TypographyAnimatedIconImageProps> = ({
  content,
  sx = {},
  placeholder = 'Kéo thả hoặc tải file để thực hiện chức năng',
  src,
  iconSize = 'large',
  loading = false,
}) => {
  const { palette } = useTheme();
  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        gap: 1,
        border: `1px dashed ${content ? palette.secondary.main : palette.primary.main}`,
        borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
        padding: STYLE.PADDING_GAP_ITEM,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: (content ? palette.secondary.main : palette.primary.main) + OPACITY[4],
        },
        flex: 1,
        ...(sx as any),
      }}
    >
      {loading ? (
        <LoadingComponent />
      ) : (
        <React.Fragment>
          <Typography color={content ? 'secondary' : 'primary'} sx={{ ...getLimitLineCss(1) }}>
            <AnimatedText text={content || placeholder} />
          </Typography>
          {src && <IconImageElement src={src} size={iconSize} />}
        </React.Fragment>
      )}
    </Stack>
  );
};
