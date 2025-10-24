import { User } from '../../apis/user/user.entities';
export type CURRENT_ACCESS = 'recruitment' | 'project' | 'propose' | 'company-staff';
export interface GlobalAccountState {
  isLogin: boolean;
  user: User | null;
  accessToken: string;
  refreshToken: string;
  fcmToken: string;
  notificationCount: number;
  userUnitPositionId: string;
  current_access?: CURRENT_ACCESS | undefined;
}
