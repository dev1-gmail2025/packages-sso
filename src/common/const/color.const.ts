export const COMMON = {
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
  gray10: '#FAFAFA',
  gray11: '#F5F5F5',

  green: '#07554B3D',
  green2: '#E6EEED',
  green3: '#008A77',
  green4: '#f2f6f5',
  green5: '#CFE7E1',
  green6: '#026D60',
  green7: '#E6F4F0',

  blue: '#EDF2F7',
  blue2: '#2D9CDB',
  blue3: '#EFF6FFE6',

  red: '#F0443829',
  red2: '#F04438',

  black: '#0A0A0A',

  yellow: '#FFF59D',
  //

  //ProjectStatus
  new: '#DFDFDF',
  pending: '#D08B0D',
  overDue: '#D44B00',
  primary: '#2563EB',
};

export const BRAND = {
  50: '#EDFFFA',
  100: '#C3FFF2',
  200: '#87FFEB',
  300: '#42FFDC',
  400: '#0CF5CA',
  500: '#00D8B2',
  600: '#00AF93',
  700: '#008A77',
  800: '#026D60',
  900: '#07554B',
  950: '#003733',
};

export const NEUTRAL = {
  50: '#FAFAFA',
  100: '#F5F5F5',
  200: '#E5E5E5',
  300: '#D4D4D4',
  400: '#A3A3A3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#202626',
  900: '#171717',
  950: '#0A0A0A',
};

export const GRAY = {
  50: '#F9FAFB',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#DDD5DB',
  400: '#9CA3AF',
  500: '#6B7280',
  600: '#4B5563',
  700: '#374151',
  800: '#1F2937',
  900: '#111827',
  950: '#030712',
};

export const ERROR = {
  50: '#FEF2F2',
  100: '#FEE2E2',
  200: '#FECACA',
  300: '#FCASA5',
  400: '#F87171',
  500: '#EF4444',
  600: '#DC2626',
  700: '#B91C1C',
  800: '#991B1B',
  900: '#7F1D1D',
  950: '#450A0A',
};

export const WARNING = {
  50: '#FFEEB8',
  100: '#FFDD93',
  200: '#FFD08A',
  300: '#FDE047',
  400: '#FACC15',
  500: '#EAB308',
  600: '#CA8A04',
  700: '#A16207',
  800: '#854D0E',
  900: '#713F12',
  950: '#422006',
};

export const SUCCESS = {
  50: '#F0FDF4',
  100: '#DCFCE7',
  200: '#BBF7D0',
  300: '#A6E96C',
  400: '#4ADE80',
  500: '#22C55E',
  600: '#16A34A',
  700: '#15803D',
  800: '#166534',
  900: '#14532D',
  950: '#052E16',
};

export const INFO = {
  50: '#EFF8FF',
  100: '#0B8AFF',
  200: '#BFD8FE',
  300: '#93C5FD',
  400: '#60A5FA',
  500: '#3B82F6',
  600: '#2563EB',
  700: '#1D4ED8',
  800: '#1E40AF',
  900: '#1E3A8A',
  950: '#172554',
};

export const ACCENT = {
  50: '#F3F3FF',
  100: '#F9F9FF',
  200: '#DDD6FE',
  300: '#C4B5FD',
  400: '#A78BFA',
  500: '#8B5CF6',
  600: '#7C3AED',
  700: '#6D28D9',
  800: '#5B21B6',
  900: '#4C1D95',
  950: '#2E1065',
};

export const HIERARCHIAL = {
  HIGHLIGHT_ROW: 'rgba(7, 85, 75, 0.12)',
  HIGHLIGHT_TEXT: 'rgba(50, 112, 255, 1)',
};

export const MAP: Record<string, { backgroundColor: string; color: string }> = {
  success: {
    backgroundColor: COMMON.success,
    color: COMMON.white,
  },
  error: { backgroundColor: COMMON.error, color: COMMON.white },
  cancel: {
    backgroundColor: COMMON.gray2,
    color: COMMON.white,
  },
};
