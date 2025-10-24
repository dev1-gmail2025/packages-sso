import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { UserType } from '../apis/user/user.enum';
import { APPS_CONFIG, getAppDomain } from '../common/constants/domains.constant';
import { AppCategory, AppModule, Environment, UserTypeForDomain } from '../common/enums/app-category.enum';
import { GlobalReduxState } from '../redux/store.interface';
import { PAGE } from '../router/route.constant';

const getCurrentEnvironment = (): Environment => process.env.REACT_APP_SERVER_BUILD as Environment;

const createAppModule = (app: any, key: string, title: string, url: string): AppModule => ({
  key,
  title,
  caption: app.caption,
  icon: app.icon,
  category: app.category,
  allowUserTypes: app.allowUserTypes,
  url,
});

// Lấy apps từ config
const getApps = (userType?: UserType): AppModule[] => {
  const isAdmin = userType === UserType.ADMIN || userType === UserType.ROOT;
  const env = getCurrentEnvironment();
  const apps: AppModule[] = [];

  Object.entries(APPS_CONFIG)
    .filter(([, app]) => app.allowUserTypes.includes(userType as UserType))
    .forEach(([key, app]) => {
      if (isAdmin) {
        // Admin users see both admin and client versions
        const adminUrl = getAppDomain(key, env, UserTypeForDomain.ADMIN);
        const clientUrl = getAppDomain(key, env, UserTypeForDomain.CLIENT);

        if (adminUrl) {
          apps.push(createAppModule(app, `${key}-${UserTypeForDomain.ADMIN}`, `Admin - ${app.title}`, adminUrl));
        }
        if (clientUrl) {
          apps.push(createAppModule(app, `${key}-${UserTypeForDomain.CLIENT}`, `${app.title}`, clientUrl));
        }
      } else {
        // Regular users see only client version
        const clientUrl = getAppDomain(key, env, UserTypeForDomain.CLIENT);
        if (clientUrl) {
          apps.push(createAppModule(app, key, app.title, clientUrl));
        }
      }
    });

  return apps.filter((app) => app?.url);
};

// Hooks
export const useApps = (tab: AppCategory = AppCategory.ALL): AppModule[] => {
  const user = useSelector((state: GlobalReduxState) => state.account?.user);
  return useMemo(() => {
    const apps = getApps(user?.type);
    return tab === AppCategory.ALL ? apps : apps.filter((app) => app.category === tab);
  }, [tab, user?.type]);
};

export const useIsSystemMonitor = (): boolean => {
  const location = useLocation();
  return location.pathname.replace(/\/+$/, '') === PAGE.DASHBOARD.path.replace(/\/+$/, '');
};

export const useActiveSidebar = (): AppModule | undefined => {
  const { current_access } = useSelector((state: GlobalReduxState) => state.account);
  const allApps = useApps(AppCategory.ALL);
  return useMemo(() => allApps.find((app) => app.key === current_access), [current_access, allApps]);
};

// Hook để quản lý sidebar state (mở/đóng)
export const useSidebarState = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
};
