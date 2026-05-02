import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { AppGroup, AppInfo, Environment } from '../../common';
import { APP_OBJ, SSO } from '../../common/const/apps.const';
import { PADDING_GAP_LAYOUT } from '../../common/const/style.const';
import { AppGrid } from '../app-grid/app-grid.component';
import { IconElement } from '../elements';
import { MotionBox } from '../motion';
import { StackRowAlignCenterJustBetween } from '../styles';

export interface AppsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
  blacklist?: string[]; // list of paths to show; if empty or no match -> show all
  env: Environment;
  onClickApp: (appInfo: AppInfo) => void;
}

export const AppsSidebar: React.FC<AppsSidebarProps> = ({
  isOpen,
  onClose,
  position = 'left',
  blacklist = [],
  env,
  onClickApp,
}) => {
  if (!isOpen) return null;

  const theme = useTheme();

  const appsGroupObj = Object.keys(APP_OBJ).reduce(
    (r, key) => {
      if (blacklist.includes(key)) return r;
      const e = (APP_OBJ as any)[key] as AppInfo;

      if (r[e.group]) r[e.group].push(e);
      else r[e.group] = [e];

      return r;
    },
    {} as Record<AppGroup, AppInfo[]>,
  );

  return (
    <>
      <Stack
        onClick={onClose}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 100,
        }}
      />

      {/* Sidebar */}
      <Stack
        preset="fadeInLeft"
        component={MotionBox}
        sx={{
          position: 'fixed',
          top: 0,
          left: position === 'left' ? 0 : 'auto',
          right: position === 'right' ? 0 : 'auto',
          height: '100%',
          backgroundColor: theme.palette.common.white,
          zIndex: 100,
          padding: PADDING_GAP_LAYOUT,
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <StackRowAlignCenterJustBetween>
          <IconElement icon="close" onClick={onClose} />
          <IconElement icon="home" onClick={() => (window.location.href = SSO[env])} />
        </StackRowAlignCenterJustBetween>

        {Object.keys(appsGroupObj).map((group) => (
          <Stack key={group}>
            <Typography variant="subtitle2">
              {group === AppGroup.PLATFORM_AND_INFO ? 'Platform & Info' : group}
            </Typography>
            <AppGrid
              apps={appsGroupObj[group as AppGroup]}
              iconSize={60}
              iconRadius={5.5}
              titleVariant="body1"
              captionVariant="caption"
              titleColor={theme.palette.grey[800]}
              captionColor={theme.palette.grey[600]}
              onClickApp={onClickApp}
              showPagination={false}
            />
          </Stack>
        ))}
      </Stack>
    </>
  );
};
