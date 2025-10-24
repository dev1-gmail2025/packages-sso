import { NotificationStatus, NotificationType } from '../../apis/notification/notification.enum';

import {
  Gender,
  UserMovementStatus,
  UserMovementType,
  UserOfficialStatus,
  UserStatus,
  UserType,
} from '../../apis/user/user.enum';

interface ColorSystem {
  tag: Record<string, string>;
  button: Record<string, string>;
}

export const COLOR_CONSTANT = {
  error: '#EF1515',
  successLight: '#3CB353',
  success: '#069021',
  main: '#07554B',
  mainLight: '#11B6AF',
  info: '#1570EF',
  warning: '#CA8A03',
  secondary: '#BF00E0',

  //Color system
  white: '#ffffff',

  gray: '#F2F2F2',
  gray2: '#BEBEBE',
  gray3: '#7A7A7A',
  gray4: '#525252',
  gray5: '#4B5563',
  gray6: '#737373',
  gray7: '#E1E1E1',
  gray8: '#E3E3E3',
  gray9: '#F4F4F7',

  green: '#07554B3D',
  green2: '#E6EEED',
  green3: '#008A77',
  green4: '#f2f6f5',

  blue: '#EDF2F7',

  red: '#F0443829',
  red2: '#F04438',

  black: '#0A0A0A',

  yellow: '#FFF59D',

  //ProjectStatus
  new: '#DFDFDF',
  pending: '#D08B0D',
  overDue: '#D44B00',
  primary: '#2563EB', // để tạm thời nếu dùng thì thay đổi sau
};
export const COLOR_SYSTEM: ColorSystem = {
  tag: {
    // NotificationType
    [NotificationType.SYSTEM]: 'success',
    [NotificationType.APPLICATION]: 'warning',
    [NotificationType.INTERVIEW_BOOKING]: 'info',
    [NotificationType.HIRED]: 'secondary',
    [NotificationType.RECRUITMENT_REQUEST]: 'primary',

    // NotificationStatus
    [NotificationStatus.NOT_VIEWED]: 'error',

    // UserType
    [UserType.ROOT]: COLOR_CONSTANT.secondary,
    [UserType.HR]: COLOR_CONSTANT.warning,
    [UserType.ADMIN]: COLOR_CONSTANT.main,
    [UserType.C_B]: COLOR_CONSTANT.successLight,
    [UserType.User]: COLOR_CONSTANT.info,

    // Gender
    [Gender.MALE]: COLOR_CONSTANT.successLight,
    [Gender.FEMALE]: COLOR_CONSTANT.warning,
    [Gender.OTHER]: COLOR_CONSTANT.warning,

    // UserStatus
    [UserStatus.ACTIVE]: COLOR_CONSTANT.successLight,
    [UserStatus.INACTIVE]: COLOR_CONSTANT.error,

    // UserMovementStatus
    [UserMovementStatus.PENDING]: COLOR_CONSTANT.info,
    [UserMovementStatus.APPROVED]: COLOR_CONSTANT.success,
    [UserMovementStatus.REJECTED]: COLOR_CONSTANT.error,
    [UserMovementStatus.VIEW]: COLOR_CONSTANT.secondary,
    [UserMovementStatus.EFFECTIVE]: COLOR_CONSTANT.successLight,
    [UserMovementStatus.CANCELLED]: COLOR_CONSTANT.error,

    [UserMovementType.APPOINTMENT]: COLOR_CONSTANT.main,
    [UserMovementType.TRANSFER]: COLOR_CONSTANT.secondary,
    [UserMovementType.DEMOTION]: COLOR_CONSTANT.success,

    // UserOfficialStatus
    [UserOfficialStatus.OFFICIAL]: COLOR_CONSTANT.main,
    [UserOfficialStatus.TRIAL]: COLOR_CONSTANT.warning,
  },
  button: {},
};

export const colorMap: Record<string, { backgroundColor: string; color: string }> = {
  success: { backgroundColor: COLOR_CONSTANT.success, color: COLOR_CONSTANT.white },
  error: { backgroundColor: COLOR_CONSTANT.error, color: COLOR_CONSTANT.white },
  cancel: { backgroundColor: COLOR_CONSTANT.gray2, color: COLOR_CONSTANT.white },
};
