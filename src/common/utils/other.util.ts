import { createTheme, SxProps, Theme } from '@mui/material';
import { Environment, Mode } from '../enums';
import { MODE, STYLE } from '../const';
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
