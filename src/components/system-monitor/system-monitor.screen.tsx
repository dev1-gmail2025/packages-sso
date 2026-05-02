import { Typography } from '@mui/material';
import { SxProps, useTheme } from '@mui/material/styles';
import { Theme } from '@mui/system';
import React, { useState } from 'react';
import { AppGroup, AppInfo } from '../../common';
import { APP_OBJ } from '../../common/const/apps.const';
import { AppGrid } from '../app-grid';
import { MotionBox } from '../motion';
import { StackAlignCenter, StackRow } from '../styles';

export interface SystemMonitorScreenProps {
  blacklist?: string[];
  onClickApp: (appInfo: AppInfo) => void;
  sx?: SxProps<Theme>;
}

export const SystemMonitorScreen: React.FC<SystemMonitorScreenProps> = ({ blacklist, onClickApp, sx = {} }) => {
  const theme = useTheme();
  const [tab, setTab] = useState<AppGroup>(AppGroup.ALL);

  const getAppsForGroup = (group: AppGroup): AppInfo[] =>
    Object.keys(APP_OBJ)
      .filter((key) => {
        const e = (APP_OBJ as any)[key] as AppInfo;
        const isBlacklisted = !!blacklist?.includes(key);
        const isInSelectedGroup = group === AppGroup.ALL ? true : e.group === group;
        return !isBlacklisted && isInSelectedGroup;
      })
      .map((key) => (APP_OBJ as any)[key] as AppInfo);

  const appsForCurrentTab = getAppsForGroup(tab);

  return (
    <StackAlignCenter preset="fadeInUp" component={MotionBox} sx={{ padding: '150px', gap: 3, width: '100%', ...sx }}>
      <StackRow>
        {Object.values(AppGroup).map((g) => {
          const appsForGroup = getAppsForGroup(g);
          if (appsForGroup.length === 0) {
            return null;
          }

          return (
            <MotionBox key={g} preset="tabUnderline">
              <Typography
                onClick={() => setTab(g)}
                sx={{
                  cursor: 'pointer',
                  color: tab === g ? theme.palette.common.white : theme.palette.grey[300],
                }}
              >
                {g}
              </Typography>
            </MotionBox>
          );
        })}
      </StackRow>
      <AppGrid apps={appsForCurrentTab} iconSize={80} iconRadius={7} onClickApp={onClickApp} isShowAppHidden={true} />
    </StackAlignCenter>
  );
};
