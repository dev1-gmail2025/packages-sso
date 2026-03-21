import { Palette, SxProps, Theme } from '@mui/material';

import { COLOR, OTHER, STYLE } from '../../../common';
import { TableActions } from './table.enum';
import { Column } from './table.interface';

export const BORDER_TABLE = `1px solid ${COLOR.COMMON.gray8}`;
export const DISABLED_DEFAULT = Object.keys(TableActions).reduce((r, key) => {
  r[key as keyof typeof TableActions] = false;
  return r;
}, {} as Record<keyof typeof TableActions, boolean>);

export const getStyleCell = (column: Column<any>, palette: Palette, disableRow?: boolean): SxProps<Theme> => {
  return {
    width: `${column.width}px !important`,
    minWidth: `${column.width}px !important`,
    maxWidth: `${column.width}px !important`,
    padding: STYLE.PADDING_GAP_ITEM,
    borderRadius: '0 !important',
    color: disableRow ? palette.divider : 'none',
    ...(column.stickyCss
      ? {
          position: 'sticky',
          backgroundColor: `${palette.background.default} !important`,
          ...column.stickyCss,
        }
      : {}),
    ...(column.sx ? column.sx : {}),
  };
};

export const getStyleRow = (
  hasOnClick: boolean,
  palette: Palette,
  index: number,
  rowSx: { [key: number]: SxProps<Theme> },
  indexLoadingRow?: number,
): SxProps<Theme> => {
  return {
    cursor: hasOnClick ? 'pointer' : 'default',
    '&:hover .MuiTableCell-root': {
      backgroundColor: 'inherit !important', // Đồng bộ màu nền khi hover
    },
    ...(rowSx[index] ? rowSx[index] : {}),
    ...(indexLoadingRow === index
      ? {
          background: `linear-gradient(270deg, ${palette.primary.light + OTHER.OPACITY[90]}, ${
            palette.action.hover
          },  ${palette.background.paper})`,
          backgroundSize: '600% 600%',
          animation: 'loading-gradient-row-table 1.5s ease infinite',
        }
      : {}),
  };
};
