import { AppGroup } from '../enums/other.enum';
import { ICONS } from './icons.const';

export const APP_GROUP_COLOR = {
  [AppGroup.WORKFLOW_ENGINE]: 'linear-gradient(180deg, #3990FF 0%, #2662FF 100%)',
  [AppGroup.HRM]: 'linear-gradient(180deg, #09D47B 0%, #07554B 100%)',
  [AppGroup.PLATFORM_AND_INFO]: 'linear-gradient(180deg, #FF9A56 0%, #FF6A43 100%)',
  [AppGroup.B2B]: 'linear-gradient(180deg, #FF9A56 0%, #EB6262 100%)',
  [AppGroup.CLIENT]: 'linear-gradient(180deg, #FF9A56 0%, #FF6A43 100%)',
  [AppGroup.OTHER]: 'linear-gradient(180deg, #A509D4 0%, #1B0755 100%)',
  [AppGroup.MANUFACTURING]: 'linear-gradient(180deg, #D48009 0%, #83610A 100%)',
};

export const SSO = {
  local: 'http://localhost:12001',
  develop: 'https://dev.account.sevago.local',
  staging: 'https://sta.account.sevago.local',
  production: 'https://account.sevago.local',
  production_vps: 'https://account.sevago.com.vn',
};

export const APP_OBJ = {
  // HRM
  SYSTEM: {
    path: {
      local: 'http://localhost:12003/system',
      develop: 'https://dev.admin.office.sevago.local/system',
      staging: 'https://dev.admin.office.sevago.local/system',
      production: 'https://admin.office.sevago.local/system',
      production_vps: 'https://admin.office.sevago.local/system',
    },
    icon: ICONS.iconSystem,
    content: 'Hệ thống',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  E_HIRING: {
    path: {
      local: 'http://localhost:12003/e-hiring',
      develop: 'https://dev.admin.office.sevago.local/e-hiring',
      staging: 'https://sta.admin.office.sevago.local/e-hiring',
      production: 'https://admin.office.sevago.local/e-hiring',
      production_vps: 'https://admin.office.sevago.com.vn/e-hiring',
    },
    icon: ICONS.iconEHiring,
    content: 'Tuyển dụng',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  HR: {
    path: {
      local: 'http://localhost:12003/hr',
      develop: 'https://dev.admin.office.sevago.local/hr',
      staging: 'https://sta.admin.office.sevago.local/hr',
      production: 'https://admin.office.sevago.local/hr',
      production_vps: 'https://admin.office.sevago.com.vn/hr',
    },
    icon: ICONS.iconHR,
    content: 'Nhân sự',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  ORG: {
    path: {
      local: 'http://localhost:12003/org',
      develop: 'https://dev.admin.office.sevago.local/org',
      staging: 'https://sta.admin.office.sevago.local/org',
      production: 'https://admin.office.sevago.local/org',
      production_vps: 'https://admin.office.sevago.com.vn/org',
    },
    icon: ICONS.iconOrg,
    content: 'Tổ chức',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },

  // PLATFORM_AND_INFO
  CHAT: {
    path: {
      local: 'http://localhost:12003/chat',
      develop: 'https://dev.admin.office.sevago.local/chat',
      staging: 'https://sta.admin.office.sevago.local/chat',
      production: 'https://admin.office.sevago.local/chat',
      production_vps: 'https://admin.office.sevago.com.vn/chat',
    },
    icon: ICONS.iconChat,
    content: 'Chat',
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  TRAINING: {
    path: {
      local: 'http://localhost:12003/training',
      develop: 'https://dev.admin.office.sevago.local/training',
      staging: 'https://sta.admin.office.sevago.local/training',
      production: 'https://admin.office.sevago.local/training',
      production_vps: 'https://admin.office.sevago.com.vn/training',
    },
    icon: ICONS.iconTraining,
    content: 'Đào tạo',
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  FORM: {
    path: {
      local: 'http://localhost:12003/form',
      develop: 'https://dev.admin.office.sevago.local/form',
      staging: 'https://sta.admin.office.sevago.local/form',
      production: 'https://admin.office.sevago.local/form',
      production_vps: 'https://admin.office.sevago.com.vn/form',
    },
    icon: ICONS.iconForm,
    content: 'Biểu mẫu',
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  INSIDE: {
    path: {
      local: 'http://localhost:12003/inside',
      develop: 'https://dev.admin.office.sevago.local/inside',
      staging: 'https://sta.admin.office.sevago.local/inside',
      production: 'https://admin.office.sevago.local/inside',
      production_vps: 'https://admin.office.sevago.com.vn/inside',
    },
    icon: ICONS.iconInside,
    content: 'Inside',
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  BOOKING: {
    path: {
      local: 'http://localhost:12003/booking',
      develop: 'https://dev.admin.office.sevago.local/booking',
      staging: 'https://sta.admin.office.sevago.local/booking',
      production: 'https://admin.office.sevago.local/booking',
      production_vps: 'https://admin.office.sevago.com.vn/booking',
    },
    icon: ICONS.iconInside,
    content: 'Booking',
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },

  // WORKFLOW_ENGINE
  PROJECT: {
    path: {
      local: 'http://localhost:12003/project',
      develop: 'https://dev.admin.office.sevago.local/project',
      staging: 'https://sta.admin.office.sevago.local/project',
      production: 'https://admin.office.sevago.local/project',
      production_vps: 'https://admin.office.sevago.com.vn/project',
    },
    icon: ICONS.iconProject,
    content: 'Dự án',
    group: AppGroup.WORKFLOW_ENGINE,
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },
  REQUEST: {
    path: {
      local: 'http://localhost:12003/request',
      develop: 'https://dev.admin.office.sevago.local/request',
      staging: 'https://sta.admin.office.sevago.local/request',
      production: 'https://admin.office.sevago.local/request',
      production_vps: 'https://admin.office.sevago.com.vn/request',
    },
    icon: ICONS.iconRequest,
    content: 'Đề xuất',
    group: AppGroup.WORKFLOW_ENGINE,
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },
  TRACKING: {
    path: {
      local: 'http://localhost:12003/process',
      develop: 'https://dev.admin.office.sevago.local/process',
      staging: 'https://sta.admin.office.sevago.local/process',
      production: 'https://admin.office.sevago.local/process',
      production_vps: 'https://admin.office.sevago.com.vn/process',
    },
    icon: ICONS.iconDefault,
    content: 'Tiến trình',
    group: AppGroup.WORKFLOW_ENGINE,
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },
  PROCESS: {
    path: {
      local: 'http://localhost:12003/workflow',
      develop: 'https://dev.admin.office.sevago.local/workflow',
      staging: 'https://sta.admin.office.sevago.local/workflow',
      production: 'https://admin.office.sevago.local/workflow',
      production_vps: 'https://admin.office.sevago.com.vn/workflow',
    },
    icon: ICONS.iconDefault,
    content: 'Quy trình',
    group: AppGroup.WORKFLOW_ENGINE,
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },

  // OTHER
  LANDING_PAGE: {
    path: {
      local: 'http://localhost:12006',
      develop: 'https://dev.admin.landing-page.sevago.local',
      staging: 'https://sta.admin.landing-page.sevago.local',
      production: 'https://admin.landing-page.sevago.local',
      production_vps: 'https://admin.landing-page.sevago.com.vn',
    },
    icon: ICONS.iconDefault,
    content: 'Landing page',
    group: AppGroup.OTHER,
    color: APP_GROUP_COLOR[AppGroup.OTHER],
  },

  // B2B
  FORMULA_PRICE: {
    path: {
      local: 'http://localhost:12008',
      develop: 'https://dev.admin.formula-price.sevago.local',
      staging: 'https://sta.admin.formula-price.sevago.local',
      production: 'https://admin.formula-price.sevago.local',
      production_vps: '',
    },
    icon: ICONS.iconDefault,
    content: 'Tính giá',
    group: AppGroup.B2B,
    color: APP_GROUP_COLOR[AppGroup.B2B],
  },
  E_CATALOGUE: {
    path: {
      local: 'http://localhost:12010',
      develop: 'https://dev.admin.e-catalogue.sevago.local',
      staging: 'https://sta.admin.e-catalogue.sevago.local',
      production: 'https://admin.e-catalogue.sevago.local',
      production_vps: '',
    },
    icon: ICONS.iconDefault,
    content: 'E-Catalogue',
    group: AppGroup.B2B,
    color: APP_GROUP_COLOR[AppGroup.B2B],
  },

  // HRM
  PAYROLL: {
    path: {
      local: 'http://localhost:12013/salary',
      develop: 'https://dev.admin.payroll-timekeeping-meal.sevago.local/salary',
      staging: 'https://sta.admin.payroll-timekeeping-meal.sevago.local/salary',
      production: 'https://admin.payroll-timekeeping-meal.sevago.local/salary',
      production_vps: '',
    },
    icon: ICONS.iconPayroll,
    content: 'Lương',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  TIMEKEEPING: {
    path: {
      local: 'http://localhost:12013/timekeeping',
      develop: 'https://dev.admin.payroll-timekeeping-meal.sevago.local/timekeeping',
      staging: 'https://sta.admin.payroll-timekeeping-meal.sevago.local/timekeeping',
      production: 'https://admin.payroll-timekeeping-meal.sevago.local/timekeeping',
      production_vps: '',
    },
    icon: ICONS.iconTimekeeping,
    content: 'Chấm công',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  MEAL: {
    path: {
      local: 'http://localhost:12013/meal-management',
      develop: 'https://dev.admin.payroll-timekeeping-meal.sevago.local/meal-management',
      staging: 'https://sta.admin.payroll-timekeeping-meal.sevago.local/meal-management',
      production: 'https://admin.payroll-timekeeping-meal.sevago.local/meal-management',
      production_vps: '',
    },
    icon: ICONS.iconMeal,
    content: 'Đặt cơm',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  LEAVE: {
    path: {
      local: 'http://localhost:12013/leave',
      develop: 'https://dev.admin.payroll-timekeeping-meal.sevago.local/leave',
      staging: 'https://sta.admin.payroll-timekeeping-meal.sevago.local/leave',
      production: 'https://admin.payroll-timekeeping-meal.sevago.local/leave',
      production_vps: '',
    },
    icon: ICONS.iconDefault,
    content: 'Nghỉ phép',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },

  // MANUFACTURING
  PURCHASE: {
    path: {
      local: 'http://localhost:12015',
      develop: 'https://dev.admin.purchase.sevago.local',
      staging: 'https://sta.admin.purchase.sevago.local',
      production: 'https://admin.purchase.sevago.local',
      production_vps: '',
    },
    icon: ICONS.iconDefault,
    content: 'Mua hàng',
    group: AppGroup.MANUFACTURING,
    color: APP_GROUP_COLOR[AppGroup.MANUFACTURING],
  },
  WAREHOUSE_MATERIAL: {
    path: {
      local: 'http://localhost:12017',
      develop: 'https://dev.admin.warehouse-material.sevago.local',
      staging: 'https://sta.admin.warehouse-material.sevago.local',
      production: 'https://admin.warehouse-material.sevago.local',
      production_vps: '',
    },
    icon: ICONS.iconDefault,
    content: 'Kho & Nguyên liệu',
    group: AppGroup.MANUFACTURING,
    color: APP_GROUP_COLOR[AppGroup.MANUFACTURING],
  },
  MANUFACTURING_PLAN: {
    path: {
      local: 'http://localhost:12019',
      develop: 'https://dev.admin.manufacturing-plan.sevago.local',
      staging: 'https://sta.admin.manufacturing-plan.sevago.local',
      production: 'https://admin.manufacturing-plan.sevago.local',
      production_vps: '',
    },
    icon: ICONS.iconDefault,
    content: 'Kế hoạch sản xuất',
    group: AppGroup.MANUFACTURING,
    color: APP_GROUP_COLOR[AppGroup.MANUFACTURING],
  },
  MANUFACTURING_EXECUTION: {
    path: {
      local: 'http://localhost:12021',
      develop: 'https://dev.admin.manufacturing-execution.sevago.local',
      staging: 'https://sta.admin.manufacturing-execution.sevago.local',
      production: 'https://admin.manufacturing-execution.sevago.local',
      production_vps: '',
    },
    icon: ICONS.iconDefault,
    content: 'Thực thi sản xuất',
    group: AppGroup.MANUFACTURING,
    color: APP_GROUP_COLOR[AppGroup.MANUFACTURING],
  },
  MATERIAL_CONTROL: {
    path: {
      local: 'http://localhost:12024',
      develop: 'https://dev.admin.material-control.sevago.local',
      staging: 'https://sta.admin.material-control.sevago.local',
      production: 'https://admin.material-control.sevago.local',
      production_vps: '',
    },
    icon: ICONS.iconMaterialControl,
    content: 'Kiểm soát nguyên liệu',
    group: AppGroup.MANUFACTURING,
    color: APP_GROUP_COLOR[AppGroup.MANUFACTURING],
  },
};
