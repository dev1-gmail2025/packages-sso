import { TableCell, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import { JSX } from 'react';
import { STYLE } from '../../../..';
import { BORDER_TABLE } from '../table.constant';
import { Column } from '../table.interface';

export interface TableHeadPartProps<R> {
  columns: Column<R>[];
}

type TableHeadPartType = <R>(props: TableHeadPartProps<R>) => JSX.Element;

export const TableHeadPart: TableHeadPartType = ({ columns }) => {
  const { palette } = useTheme();

  return (
    <TableHead>
      <TableRow>
        {columns.map(column => (
          <TableCell
            key={column.id}
            align={column.align}
            sx={{
              width: `${column.width}px !important`,
              minWidth: `${column.width}px !important`,
              maxWidth: `${column.width}px !important`,
              fontWeight: 550,
              padding: STYLE.PADDING_GAP_ITEM,
              borderRadius: '0 !important',
              backgroundColor: '#F9FAFB',
              verticalAlign: 'top',
              textAlign: column.alignHead ? column.alignHead : 'center',
              ...(column.stickyCss
                ? {
                    ...column.stickyCss,
                    position: 'sticky',
                    backgroundColor: palette.background.paper,
                    zIndex: 4,
                    borderRight: column.stickyCss?.left != null ? BORDER_TABLE : '',
                  }
                : {}),
              ...(column.sx ? column.sx : {}),
            }}
          >
            <Typography variant='subtitle1'>{column.label}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
