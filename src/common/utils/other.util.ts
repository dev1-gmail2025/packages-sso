import { createTheme, SxProps, Theme } from '@mui/material';
import { Environment, Mode } from '../enums';
import { COLOR, MODE, STYLE } from '../const';
import { OPACITY } from '../const/other.const';

export const getTheme = (mode = Mode.LIGHT) => {
  return createTheme({
    ...MODE[mode],
    ...MODE.OTHER,
    components: {
      MuiStack: {
        styleOverrides: { root: { gap: STYLE.PADDING_GAP_LAYOUT } },
      },
      MuiButton: {
        defaultProps: { size: 'medium', fullWidth: true },
        styleOverrides: {
          root: {
            '&.Mui-disabled': {
              borderColor: MODE[mode].palette.divider,
            },
            fontWeight: 400,
            lineHeight: 'unset',
            height: STYLE.HEIGHT_DEFAULT_TEXT_FIELD_BUTTON,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: MODE[mode].palette.background.paper,
            color: MODE[mode].palette.text.primary,
            boxShadow: MODE[mode].shadows[1],
            padding: STYLE.PADDING_GAP_ITEM,
            margin: `5px !important`,
            borderRadius: STYLE.BORDER_RADIUS_ELEMENT_WRAPPER,
            maxWidth: 'none',
          },
        },
      },
      MuiTextField: {
        defaultProps: { variant: 'outlined', size: 'small', fullWidth: true },
        styleOverrides: {
          root: {
            '& fieldset': {
              borderColor: MODE[mode].palette.divider,
              borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
            },
            '& .MuiFormHelperText-root': { ...getLimitLineCss(1) },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: { borderColor: `${MODE[mode].palette.divider}${OPACITY[30]}` },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontWeight: 'unset',
            boxShadow: 'none',
            border: 'none',
            '&:first-of-type': {
              borderTopLeftRadius: STYLE.BORDER_RADIUS_ELEMENT,
              borderBottomLeftRadius: STYLE.BORDER_RADIUS_ELEMENT,
            },
            '&:last-of-type': {
              borderTopRightRadius: STYLE.BORDER_RADIUS_ELEMENT,
              borderBottomRightRadius: STYLE.BORDER_RADIUS_ELEMENT,
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          '*::-webkit-scrollbar': { width: '6px', height: '6px' },
          '*::-webkit-scrollbar-track': { background: 'transparent' },
          '*::-webkit-scrollbar-thumb': {
            borderRadius: '8px',
            backgroundClip: 'content-box',
            backgroundColor: 'rgba(0,0,0,0.25)',
            transition: 'background-color 0.3s',
          },
          '*:hover::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(0,0,0,0.45)' },
        },
      },
    },
  } as unknown as Theme);
};

export const calculatePageAndIndex = (
  urlIndex: number,
  urlPage: number,
  urlTake: number,
  currentTake: number = 10,
): { page: number; index: number } => {
  // Nếu take từ URL bằng take hiện tại, giữ nguyên page và index
  if (urlTake === currentTake) {
    return {
      page: urlPage,
      index: urlIndex,
    };
  }

  // Tính toán vị trí tuyệt đối của item trong danh sách
  // Vị trí = (page - 1) * itemsPerPage + index
  const absolutePosition = (urlPage - 1) * urlTake + urlIndex;

  // Tính toán page mới dựa trên take hiện tại
  const newPage = Math.floor(absolutePosition / currentTake) + 1;

  // Tính toán index mới trong page mới
  const newIndex = absolutePosition % currentTake;

  return {
    page: newPage,
    index: newIndex === 0 ? currentTake : newIndex, // Nếu index = 0 thì là item cuối cùng của page trước
  };
};

export const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export const getLimitLineCss = (line: number): SxProps<Theme> => ({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: line,
  // textOverflow: 'ellipsis',
});

export const getCurrentEnvironment = (): Environment => {
  const { hostname } = window.location;
  if (hostname.includes('dev.')) return Environment.DEVELOP;
  if (hostname.includes('sta.')) return Environment.STAGING;
  return Environment.PRODUCTION;
};

export const getErrorMessage = (e: unknown) => (e as Error)?.message ?? 'Đã xảy ra lỗi không xác định!';

export const getAppBlackList = (user: any, env: Environment, appBlackList: Record<string, string[]>) => {
  if (!user) return [];
  const baseList = appBlackList[env] || [];
  const result = [...baseList];

  if (env === Environment.DEVELOP && !['01745', '04285', '04356', 'CEO79'].includes(user?.code)) {
    return [...result, 'MEAL'];
  }
  return result;
};

export const lightenColor = (hex?: string, percent: number = 0): string => {
  if (!hex || !/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex)) {
    return COLOR.COMMON.white;
  }

  let r: number, g: number, b: number;

  if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  } else {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }

  r = Math.round(r + (255 - r) * percent);
  g = Math.round(g + (255 - g) * percent);
  b = Math.round(b + (255 - b) * percent);

  return `rgb(${r}, ${g}, ${b})`;
};
