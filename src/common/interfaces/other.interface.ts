import { AppGroup } from '../enums';

export interface ChangeEventCustom<T> {
  target: { name?: string; value?: T };
}

export interface AppInfo {
  path: { local: string; develop: string; staging: string; production: string; production_vps: string };
  content: string;
  color: string;
  icon: string;
  group: AppGroup;
}
