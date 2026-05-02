import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { AppInfo, COLOR } from '../../common';
import {
  BORDER_RADIUS_ELEMENT_WRAPPER,
  PADDING_GAP_BUTTON,
  PADDING_GAP_ITEM_SMALL,
} from '../../common/const/style.const';
import { IconElement } from '../elements';
import { MotionBox } from '../motion';
import { StackAlignCenter, StackRowAlignCenter } from '../styles';
import { AppGridItem } from './app-grid-item.component';

export interface AppGridProps {
  apps: AppInfo[];
  columns?: number;
  rows?: number;
  iconSize?: number;
  iconRadius?: number;
  titleVariant?: 'subtitle1' | 'body1' | 'caption';
  captionVariant?: 'caption' | 'body2';
  titleColor?: string;
  captionColor?: string;
  showPagination?: boolean;
  onClickApp: (appInfo: AppInfo) => void;
  isShowAppHidden?: boolean;
}

export const AppGrid: React.FC<AppGridProps> = ({
  apps,
  columns = 5,
  rows = 3,
  iconSize = 80,
  iconRadius = 7,
  titleVariant = 'subtitle1',
  titleColor,
  showPagination = true,
  onClickApp,
  isShowAppHidden = false,
}) => {
  const theme = useTheme();

  const pageSize = Math.max(1, columns * Math.max(1, rows));
  const totalPages = Math.max(1, Math.ceil(apps.length / pageSize));
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    setPage((prev) => (prev >= totalPages ? totalPages - 1 : prev));
  }, [totalPages, columns, rows, apps.length]);

  const start = page * pageSize;
  const end = start + pageSize;
  const visibleApps = totalPages > 1 ? apps.slice(start, end) : apps;

  const placeholdersCount = isShowAppHidden ? Math.max(0, pageSize - visibleApps.length) : 0;
  const placeholderHeight = isShowAppHidden ? iconSize + 36.5 : 0;

  return (
    <StackAlignCenter sx={{ width: '100%', gap: 3 }}>
      <StackRowAlignCenter sx={{ width: '100%', gap: 3 }}>
        {showPagination && (
          <IconElement
            icon="arrow_back"
            size="large"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={apps.length < pageSize || page !== totalPages - 1}
            sx={{ color: `${COLOR.GRAY[300]} !important` }}
          />
        )}

        <Stack sx={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, width: '100%' }}>
          {visibleApps.map((app, index) => {
            return (
              <StackAlignCenter
                component={MotionBox}
                key={index}
                preset="staggerItem"
                index={index}
                hover
                sx={{ cursor: 'pointer', flex: 1 }}
                onClick={() => onClickApp(app)}
              >
                <AppGridItem
                  app={app}
                  iconSize={iconSize}
                  iconRadius={iconRadius}
                  titleVariant={titleVariant}
                  titleColor={titleColor ?? theme.palette.common.white}
                />
              </StackAlignCenter>
            );
          })}
          {placeholdersCount > 0 &&
            Array.from({ length: placeholdersCount }).map((_, fillerIndex) => (
              <Box
                key={`placeholder-${fillerIndex}`}
                sx={{
                  visibility: 'hidden',
                  width: 1,
                  minHeight: placeholderHeight,
                }}
              />
            ))}
        </Stack>

        {showPagination && (
          <IconElement
            icon="arrow_forward"
            size="large"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={apps.length < pageSize || page === totalPages - 1}
            sx={{ color: `${COLOR.GRAY[300]} !important` }}
          />
        )}
      </StackRowAlignCenter>

      {showPagination && totalPages > 1 && (
        <StackRowAlignCenter
          sx={{
            px: PADDING_GAP_BUTTON,
            py: PADDING_GAP_ITEM_SMALL,
            borderRadius: BORDER_RADIUS_ELEMENT_WRAPPER,
            backgroundColor: 'rgba(255,255,255,0.15)',
            width: 'fit-content',
          }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <Box
              key={i}
              onClick={() => setPage(i)}
              sx={{
                height: 10,
                borderRadius: BORDER_RADIUS_ELEMENT_WRAPPER,
                cursor: 'pointer',
                transition: 'width 0.3s ease',
                width: i === page ? '40px' : '10px',
                backgroundColor: i === page ? theme.palette.common.white : 'rgba(255,255,255,0.35)',
              }}
            />
          ))}
        </StackRowAlignCenter>
      )}
    </StackAlignCenter>
  );
};
