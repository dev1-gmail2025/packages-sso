import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PADDING_GAP_TAB } from '../../../../common/constant/style.constant';
import { AppCategory } from '../../../../common/enums/app-category.enum';
import { AppGrid } from '../../../../components/app-grid/app-grid.component';
import { MotionBox } from '../../../../components/motion/motion-box.component';
import { useActiveSidebar, useApps } from '../../../../hooks/use-apps.hook';
import { ACTION_ACCOUNT } from '../../../../redux';
import { GlobalReduxState } from '../../../../redux/store.interface';
import { useAppDispatch } from '../../../../redux/store.redux';

export const SystemMonitorScreen: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [tab, setTab] = useState<AppCategory>(AppCategory.ALL);

  const user = useSelector((state: GlobalReduxState) => state.account?.user);

  const listApp = useApps(tab);
  const currentApp = useActiveSidebar();

  return (
    <MotionBox
      preset="fadeInUp"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        top: 125,
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
          {(
            [
              { key: AppCategory.ALL, label: 'Tất Cả' },
              { key: AppCategory.HRM, label: 'HRM' },
              { key: AppCategory.WORKFLOW, label: 'Workflow Engine' },
              { key: AppCategory.PLATFORM_INFO, label: 'Platform & Info' },
            ] as { key: AppCategory; label: string }[]
          ).map((t) => (
            <MotionBox key={t.key} sx={{ position: 'relative' }} preset="tabUnderline">
              <Typography
                onClick={() => setTab(t.key)}
                sx={{
                  cursor: 'pointer',
                  color: tab === t.key ? theme.palette.common.white : theme.palette.grey[300],
                }}
              >
                {t.label}
              </Typography>

              {tab === t.key && (
                <MotionBox
                  preset="tabUnderline"
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: 2,
                    backgroundColor: theme.palette.common.white,
                    transformOrigin: 'left',
                  }}
                >
                  <div />
                </MotionBox>
              )}
            </MotionBox>
          ))}
        </Box>
        <MotionBox key={tab} preset="tabContent">
          <AppGrid
            apps={listApp}
            selectedAppId={currentApp?.key}
            onClickItem={async (app) => {
              await dispatch(ACTION_ACCOUNT.updateCurrentAccess(app.key)).unwrap();
              if (!app.children?.length) {
                navigate(app.path || '');
                return;
              }
              for (const i of app.children || []) {
                if (user?.type && i.allowUserTypes.includes(user?.type)) {
                  if (i.path) {
                    navigate(`${i.path}`);
                    break;
                  }
                }
              }
            }}
          />
        </MotionBox>
      </Box>
    </MotionBox>
  );
};
