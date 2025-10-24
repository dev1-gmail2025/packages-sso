import { UserType } from '../../apis/user/user.enum';
import { AppCategory, AppType, UserTypeForDomain } from '../enums/app-category.enum';

// App keys
export const APP_KEYS = {
  FORMULA_PRICE: 'formula-price',
  E_CATALOGUE: 'e-catalogue',
  LANDING_PAGE_FIRST: 'landing-page-first',
  LANDING_PAGE_SECOND: 'landing-page-second',
  SEVAGO_E_HIRING: 'dashboard/job-dashboard',
  SEVAGO_HRM: 'dashboard/user-list',
  SEVAGO_PAYROLL: 'dashboard/payroll',
  SEVAGO_CHART: 'dashboard/org-structure',
  SEVAGO_CHECKIN: 'dashboard/check-in',
  SEVAGO_PROJECT: 'dashboard/project-task',
  SEVAGO_REQUEST: 'workflow/request-job',
  SEVAGO_PROCESS: 'sevago-process',
  SEVAGO_TRACKING: 'tracking/my-task',
  SEVAGO_MESSAGE: 'dashboard/chat',
  SEVAGO_TRAINING: 'dashboard/training',
  SEVAGO_FORM: 'sevago-form',
  SEVAGO_INSIDE: 'dashboard/inside',
  SEVAGO_BOOKING: 'booking',
} as const;

// App metadata
export const APP_METADATA = {
  [APP_KEYS.FORMULA_PRICE]: {
    title: 'Formula Price',
    caption: 'Tính giá sản phẩm',
    icon: '/images/system/sevago-rice.svg',
  },
  [APP_KEYS.E_CATALOGUE]: {
    title: 'E-Catalogue',
    caption: 'E-Catalogue',
    icon: '/images/system/sevago-rice.svg',
  },
  [APP_KEYS.LANDING_PAGE_FIRST]: {
    title: 'Landing Page',
    caption: 'Landing Page First',
    icon: '/images/system/sevago-rice.svg',
  },
  [APP_KEYS.LANDING_PAGE_SECOND]: {
    title: 'Landing Page',
    caption: 'Landing Page Second',
    icon: '/images/system/sevago-rice.svg',
  },
  [APP_KEYS.SEVAGO_E_HIRING]: {
    title: 'Sevago E-Hiring',
    caption: 'Tuyển Dụng',
    icon: '/images/system/sevago-e-hiring.svg',
  },
  [APP_KEYS.SEVAGO_HRM]: {
    title: 'Sevago HRM',
    caption: 'Nhân Sự',
    icon: '/images/system/sevago-hrm.svg',
  },
  [APP_KEYS.SEVAGO_PAYROLL]: {
    title: 'Sevago Payroll',
    caption: 'Tính Lương',
    icon: '/images/system/sevago-payroll.svg',
  },
  [APP_KEYS.SEVAGO_CHART]: {
    title: 'Sevago Sơ đồ',
    caption: 'Sơ đồ',
    icon: '/images/system/sevago-chart.svg',
  },
  [APP_KEYS.SEVAGO_CHECKIN]: {
    title: 'Sevago Checkin',
    caption: 'Chấm Công',
    icon: '/images/system/sevago-checkin.svg',
  },
  [APP_KEYS.SEVAGO_PROJECT]: {
    title: 'Sevago Project',
    caption: 'Dự Án',
    icon: '/images/system/sevago-project.svg',
  },
  [APP_KEYS.SEVAGO_REQUEST]: {
    title: 'Sevago Request',
    caption: 'Đề Xuất',
    icon: '/images/system/sevago-request.svg',
  },
  [APP_KEYS.SEVAGO_PROCESS]: {
    title: 'Sevago Process',
    caption: 'Quy trình',
    icon: '/images/system/sevago.svg',
  },
  [APP_KEYS.SEVAGO_TRACKING]: {
    title: 'Sevago Tracking',
    caption: 'Tiến trình',
    icon: '/images/system/sevago.svg',
  },
  [APP_KEYS.SEVAGO_MESSAGE]: {
    title: 'Sevago Message',
    caption: 'Chat nhóm',
    icon: '/images/system/sevago-message.svg',
  },
  [APP_KEYS.SEVAGO_TRAINING]: {
    title: 'Sevago Training',
    caption: 'Đào Tạo',
    icon: '/images/system/sevago-training.svg',
  },
  [APP_KEYS.SEVAGO_FORM]: {
    title: 'Sevago Form',
    caption: 'Biểu mẫu',
    icon: '/images/system/sevago-form.svg',
  },
  [APP_KEYS.SEVAGO_INSIDE]: {
    title: 'Sevago Inside',
    caption: 'Truyền Thông và CSNV',
    icon: '/images/system/sevago-inside.svg',
  },
  [APP_KEYS.SEVAGO_BOOKING]: {
    title: 'Sevago Booking',
    caption: 'Cuộc họp',
    icon: '/images/system/sevago-inside.svg',
  },
} as const;

// Base domains for different environments
export const BASE_DOMAINS = {
  localhost: {
    client: 'http://localhost:6003',
  },
  develop: {
    client: 'https://dev.admin.office.sevago.local',
  },
  staging: {
    client: 'https://admin.office.sevago.jewelry',
  },

  //Chưa phát triển
  production: {
    client: 'https://www.google.com/',
  },
};

// App-specific domain patterns
export const APP_DOMAINS = {
  // External apps with custom domains
  [APP_KEYS.FORMULA_PRICE]: {
    develop: {
      admin: 'https://dev.formula-price.sevago.local/',
    },
    staging: {
      admin: 'https://formula-price.sevago.local/',
    },
  },
  [APP_KEYS.E_CATALOGUE]: {
    develop: {
      client: 'https://dev.e-catalogue.sevago.local',
      admin: 'https://dev.admin.e-catalogue.sevago.local',
    },
    staging: {
      client: 'https://e-catalogue.sevago.jewelry',
      admin: 'https://admin.e-catalogue.sevago.local',
    },
  },
  [APP_KEYS.LANDING_PAGE_FIRST]: {
    develop: {
      client: 'http://dev.landing-page-first.sevago.local',
      admin: 'https://dev.admin.landing-page-first.sevago.local',
    },
    staging: {
      client: 'http://dev.landing-page-first.sevago.local',
    },
  },
  [APP_KEYS.LANDING_PAGE_SECOND]: {
    develop: {
      client: 'http://dev.landing-page-second.sevago.local',
      admin: 'https://dev.admin.landing-page-second.sevago.local',
    },
    staging: {
      client: 'http://dev.landing-page-second.sevago.local',
    },
  },
};

// Helper function to create app config
const createAppConfig = (key: string, category: AppCategory, allowUserTypes: UserType[], type: AppType) => ({
  ...APP_METADATA[key as keyof typeof APP_METADATA],
  category,
  allowUserTypes,
  type,
});

// All apps configuration
const allowAdminUserTypes = [UserType.ADMIN, UserType.ROOT];
const allowAlUserTypes = [
  UserType.ROOT,
  UserType.ADMIN,
  UserType.HR,
  UserType.User,
  UserType.C_B,
  UserType.EMPLOYEE,
  UserType.CANDIDATE,
];
export const APPS_CONFIG = {
  // Custom apps
  [APP_KEYS.FORMULA_PRICE]: createAppConfig(
    APP_KEYS.FORMULA_PRICE,
    AppCategory.HRM,
    allowAdminUserTypes,
    AppType.CUSTOM,
  ),
  [APP_KEYS.E_CATALOGUE]: createAppConfig(APP_KEYS.E_CATALOGUE, AppCategory.HRM, allowAlUserTypes, AppType.CUSTOM),
  [APP_KEYS.LANDING_PAGE_FIRST]: createAppConfig(
    APP_KEYS.LANDING_PAGE_FIRST,
    AppCategory.HRM,
    allowAlUserTypes,
    AppType.CUSTOM,
  ),
  [APP_KEYS.LANDING_PAGE_SECOND]: createAppConfig(
    APP_KEYS.LANDING_PAGE_SECOND,
    AppCategory.HRM,
    allowAlUserTypes,
    AppType.CUSTOM,
  ),

  // HRM Office apps
  [APP_KEYS.SEVAGO_E_HIRING]: createAppConfig(
    APP_KEYS.SEVAGO_E_HIRING,
    AppCategory.HRM,
    allowAlUserTypes,
    AppType.OFFICE,
  ),
  [APP_KEYS.SEVAGO_HRM]: createAppConfig(APP_KEYS.SEVAGO_HRM, AppCategory.HRM, allowAlUserTypes, AppType.OFFICE),
  [APP_KEYS.SEVAGO_PAYROLL]: createAppConfig(
    APP_KEYS.SEVAGO_PAYROLL,
    AppCategory.HRM,
    allowAlUserTypes,
    AppType.OFFICE,
  ),
  [APP_KEYS.SEVAGO_CHART]: createAppConfig(APP_KEYS.SEVAGO_CHART, AppCategory.HRM, allowAlUserTypes, AppType.OFFICE),
  [APP_KEYS.SEVAGO_CHECKIN]: createAppConfig(
    APP_KEYS.SEVAGO_CHECKIN,
    AppCategory.HRM,
    allowAlUserTypes,
    AppType.OFFICE,
  ),

  // Workflow Office apps
  [APP_KEYS.SEVAGO_PROJECT]: createAppConfig(
    APP_KEYS.SEVAGO_PROJECT,
    AppCategory.WORKFLOW,
    allowAlUserTypes,
    AppType.OFFICE,
  ),
  [APP_KEYS.SEVAGO_REQUEST]: createAppConfig(
    APP_KEYS.SEVAGO_REQUEST,
    AppCategory.WORKFLOW,
    allowAlUserTypes,
    AppType.OFFICE,
  ),
  [APP_KEYS.SEVAGO_PROCESS]: createAppConfig(
    APP_KEYS.SEVAGO_PROCESS,
    AppCategory.WORKFLOW,
    allowAlUserTypes,
    AppType.OFFICE,
  ),
  [APP_KEYS.SEVAGO_TRACKING]: createAppConfig(
    APP_KEYS.SEVAGO_TRACKING,
    AppCategory.WORKFLOW,
    allowAlUserTypes,
    AppType.OFFICE,
  ),

  // Platform Info Office apps
  [APP_KEYS.SEVAGO_MESSAGE]: createAppConfig(
    APP_KEYS.SEVAGO_MESSAGE,
    AppCategory.PLATFORM_INFO,
    allowAlUserTypes,
    AppType.OFFICE,
  ),
  [APP_KEYS.SEVAGO_TRAINING]: createAppConfig(
    APP_KEYS.SEVAGO_TRAINING,
    AppCategory.PLATFORM_INFO,
    allowAlUserTypes,
    AppType.OFFICE,
  ),
  [APP_KEYS.SEVAGO_FORM]: createAppConfig(
    APP_KEYS.SEVAGO_FORM,
    AppCategory.PLATFORM_INFO,
    allowAlUserTypes,
    AppType.OFFICE,
  ),
  [APP_KEYS.SEVAGO_INSIDE]: createAppConfig(
    APP_KEYS.SEVAGO_INSIDE,
    AppCategory.PLATFORM_INFO,
    allowAlUserTypes,
    AppType.OFFICE,
  ),
  [APP_KEYS.SEVAGO_BOOKING]: createAppConfig(
    APP_KEYS.SEVAGO_BOOKING,
    AppCategory.PLATFORM_INFO,
    allowAlUserTypes,
    AppType.OFFICE,
  ),
} as const;

// Helper function to get domain for office apps
export const getOfficeAppDomain = (
  appKey: string,
  environment: keyof typeof BASE_DOMAINS,
  userType: UserTypeForDomain,
): string => {
  // Office apps only support client access
  if (userType === UserTypeForDomain.ADMIN) {
    return '';
  }
  const baseDomain = BASE_DOMAINS[environment].client;
  return `${baseDomain}/${appKey}`;
};

// Helper function to get domain for any app
export const getAppDomain = (
  appKey: string,
  environment: keyof typeof BASE_DOMAINS,
  userType: UserTypeForDomain = UserTypeForDomain.CLIENT,
): string => {
  // Check if it's a custom domain app
  const customDomain = APP_DOMAINS[appKey as keyof typeof APP_DOMAINS];
  if (customDomain) {
    return (customDomain as any)[environment]?.[userType] || '';
  }

  // Default to office app
  return getOfficeAppDomain(appKey, environment, userType);
};
