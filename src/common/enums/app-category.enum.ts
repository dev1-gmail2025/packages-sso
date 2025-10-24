import { UserType } from '../../apis/user/user.enum';

export enum AppCategory {
  ALL = 'all',
  HRM = 'hrm',
  WORKFLOW = 'workflow',
  PLATFORM_INFO = 'platform-info',
}

export enum AppType {
  SUBMENU = 'submenu',
  EXPAND_MENU = 'expand-menu',
}

// User type enum
export enum UserTypeString {
  CLIENT = 'client',
  ADMIN = 'admin',
}

// Environment config types
export interface EnvironmentConfig {
  [UserTypeString.CLIENT]?: { domain: string };
  [UserTypeString.ADMIN]?: { domain: string };
}

export interface AppEnvironments {
  [Environment.DEVELOP]?: EnvironmentConfig;
  [Environment.STAGING]?: EnvironmentConfig;
  [Environment.PRODUCTION]?: EnvironmentConfig;
}

// JSON config interface
export interface AppConfigFromJson {
  key: string;
  title: string;
  caption: string;
  icon: string;
  category: string;
  allowUserTypes: string[];
  environments?: AppEnvironments;
}

// Runtime app interface
export interface AppModule {
  key: string;
  title: string;
  caption: string;
  icon: string;
  category: AppCategory;
  allowUserTypes: UserType[];
  children?: AppModule[];
  path?: string;
  url?: string;
  logo?: boolean;
  server?: string;
  port?: number;
}

// Environment enum
export enum Environment {
  DEVELOP = 'develop',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

// User type for domain access
export enum UserTypeForDomain {
  CLIENT = 'client',
  ADMIN = 'admin',
}

// App type enum
export enum AppType {
  CUSTOM = 'custom',
  OFFICE = 'office',
}
