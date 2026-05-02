import { useMemo, useState } from 'react';
import { AppInfo, Environment, ICONS } from '../../common';
import { APP_OBJ } from '../../common/const/apps.const';
import { AppGridItem } from '../app-grid';
import { ImageElement } from '../elements';
import { StackRowAlignCenter } from '../styles';
import { AppsSidebar } from './apps-sidebar.component';

export interface SystemMonitorSidebarPartProps {
  position?: 'left' | 'right';
  blacklist?: string[]; // list of paths to show; if empty or no match -> show all
  env: Environment;
  onClickApp: (appInfo: AppInfo) => void;
  showNameApps?: boolean;
  showIconApps?: boolean;
  direction?: 'row' | 'column';
}

export const SystemMonitorSidebarPart: React.FC<SystemMonitorSidebarPartProps> = ({
  position,
  blacklist,
  env,
  onClickApp,
  showNameApps,
  showIconApps,
  direction = 'row',
}) => {
  const [open, setOpen] = useState(false);

  const app = useMemo(() => {
    return (
      Object.values(APP_OBJ).find((e) => Object.values(e.path).some((k) => k.includes(window.location.href))) ||
      APP_OBJ.SYSTEM
    );
  }, [window.location.href]);

  return (
    <StackRowAlignCenter>
      <ImageElement url={ICONS.iconApps} onClick={() => setOpen(true)} sizeType={'SQUARE'} />

      <AppGridItem
        app={app}
        iconSize={32}
        iconRadius={3}
        showNameApps={showNameApps}
        showIconApps={showIconApps}
        direction={direction}
      />

      <AppsSidebar
        isOpen={open}
        onClose={() => setOpen(false)}
        position={position}
        blacklist={blacklist}
        env={env}
        onClickApp={onClickApp}
      />
    </StackRowAlignCenter>
  );
};
