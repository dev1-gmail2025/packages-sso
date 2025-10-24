// ===== CORE COMPONENTS =====
export { ImageElement } from './components/elements/image/image.element';
export { AppsSidebar } from './components/sidebar/apps-sidebar.component';
export { SystemMonitorScreen } from './pages/dashboard/parts/system-monitor/system-monitor.screen';

// ===== ESSENTIAL HOOKS =====
export { useApps, useIsSystemMonitor, useActiveSidebar, useSidebarState } from './hooks/use-apps.hook';
export { useSnackbar } from './hooks/use-snackbar.hook';

// ===== REDUX STORE =====
export { store } from './redux/store.redux';
export type { GlobalReduxState } from './redux/store.interface';

// ===== APPS CONFIGURATION =====
export {
  APPS_CONFIG,
  APP_DOMAINS,
  BASE_DOMAINS,
  getAppDomain,
  getOfficeAppDomain,
} from './common/constants/domains.constant';

// ===== ENUMS =====
export { AppCategory, Environment, UserTypeForDomain, AppType } from './common/enums/app-category.enum';

// ===== SSO UTILITIES =====
export { restoreAccountFromSSO } from './common/utils/sso.utils';
export { createSSOUrl } from './common/utils/sso.utils';
