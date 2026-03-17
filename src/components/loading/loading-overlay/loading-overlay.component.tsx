import { CircularProgress, Box, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../common';

export interface LoadingOverlayProps {
  loading?: boolean;
  size?: 'large' | 'small' | 'medium';
  color?: string;
  sx?: SxProps<Theme>;
  message?: string;
  showBackdrop?: boolean;
  topOffset?: number;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  loading = false,
  size = 'medium',
  color,
  sx = {},
  message,
  showBackdrop = true,
  topOffset = 0,
}) => {
  const spinnerSize = STYLE.FONT_SIZE_LOADING[size] || 40;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: topOffset || 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        backgroundColor: showBackdrop ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: showBackdrop ? (loading ? 'blur(3px)' : 'none') : 'none',
        transition: loading
          ? 'opacity 0.2s ease-out, backdrop-filter 0.2s ease-out, visibility 0s 0s'
          : 'opacity 0.15s ease-out, backdrop-filter 0.15s ease-out, visibility 0s 0.15s',
        opacity: loading ? 1 : 0,
        visibility: loading ? 'visible' : 'hidden',
        borderRadius: 0,
        pointerEvents: loading ? 'auto' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          transition: loading ? 'opacity 0.2s ease-out' : 'opacity 0.15s ease-out',
          opacity: loading ? 1 : 0,
        }}
      >
        {/* Main spinner */}
        <CircularProgress
          size={spinnerSize}
          thickness={4}
          sx={{
            color: color || 'primary.main',
            filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))',
          }}
        />

        {/* Message */}
        {message && (
          <Typography
            variant='body2'
            sx={{
              color: 'text.secondary',
              fontSize: '14px',
              fontWeight: 500,
              textAlign: 'center',
              letterSpacing: '0.3px',
              maxWidth: '300px',
              lineHeight: 1.5,
              transition: loading ? 'opacity 0.2s ease-out 0.05s' : 'opacity 0.15s ease-out',
              opacity: loading ? 1 : 0,
            }}
          >
            {message}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
