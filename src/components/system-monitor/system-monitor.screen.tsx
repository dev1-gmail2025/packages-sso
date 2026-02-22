import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { APP_OBJ } from '../../common/const/apps.const';
import { PADDING_GAP_TAB } from '../../common/const/style.const';
import { AppGrid } from '../app-grid';
import { MotionBox } from '../motion';
import { Environment, AppInfo, AppGroup } from '../../common';

export interface SystemMonitorScreenProps {
  blacklist?: string[];
  env: Environment;
  onClickApp: (appInfo: AppInfo) => void;
}

export const SystemMonitorScreen: React.FC<SystemMonitorScreenProps> = ({ blacklist, env, onClickApp }) => {
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
    <MotionBox
      preset="fadeInUp"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        top: 150,
      }}
    >
      <Box
        sx={{
          width: 865,
          gap: 6.25,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: PADDING_GAP_TAB,
            width: '100%',
            justifyContent: 'flex-start',
          }}
        >
          {Object.values(AppGroup).map((g) => {
            const appsForGroup = getAppsForGroup(g);
            if (appsForGroup.length === 0) {
              return null;
            }

            return (
              <MotionBox key={g} sx={{ position: 'relative' }} preset="tabUnderline">
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
        </Box>
        <MotionBox key={tab} preset="tabContent">
          <AppGrid
            apps={appsForCurrentTab}
            iconSize={80}
            iconRadius={7}
            gap={PADDING_GAP_TAB}
            onClickApp={onClickApp}
            isShowAppHidden={true}
          />
        </MotionBox>
      </Box>
    </MotionBox>
  );
};
