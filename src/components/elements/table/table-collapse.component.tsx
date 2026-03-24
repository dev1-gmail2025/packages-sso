import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import React, { JSX, useEffect, useRef, useState } from 'react';
import { EmptyComponent } from '../../empty';
import { LoadingComponent } from '../../loading';
import { RowCollapsePart } from './part/row-collapse.part';
import { TableContainerPart } from './part/table-container.part';
import { TableHeadPart } from './part/table-head.part';
import { CollapseProps, Column, OnClickRow, OnDisabled } from './table.interface';

export interface TableCollapseComponentProps<R, RC> {
  loading: boolean;
  rows?: R[];
  columns: Column<R>[];
  indexLoadingRow?: number;
  collapse: CollapseProps<R, RC>;
  isStickyActions?: boolean;

  onClickRow?: OnClickRow<R>;
  onDisabled?: OnDisabled<R>;

  // end row + 1 icon collapse
  onSelectRow?: OnClickRow<R>;
  onDeleteRow?: OnClickRow<R>;
  onInfoRow?: OnClickRow<R>;
  onCopyRow?: OnClickRow<R>;
  onUpdateRow?: OnClickRow<R>;
}

type TableCollapseComponentType = <R, RC>(props: TableCollapseComponentProps<R, RC>) => JSX.Element;

export const TableCollapseComponent: TableCollapseComponentType = ({
  loading,
  rows,
  columns: initialColumns,
  indexLoadingRow,
  collapse,
  isStickyActions = false,

  onClickRow,
  onDisabled,

  // end row + 1 icon collapse
  onSelectRow,
  onDeleteRow,
  onInfoRow,
  onCopyRow,
  onUpdateRow,
}) => {
  rows = rows || [];

  // 19 là kích thước icon
  // 16 là khoảng cách giữa 2 icon
  const lengthActions = [onSelectRow, onDeleteRow, onInfoRow, onCopyRow, onUpdateRow].filter(Boolean).length + 1; // + 1 do collapse icon
  const widthActions = lengthActions * 19 + (lengthActions - 1) * 16;

  const columns = React.useMemo(() => {
    const updateColumns = [...initialColumns];

    // Update trước để render head vì dồn collapse vào đây. Chắc chắn cột này sẽ có.
    // Vào trong RowCollapsePart update thêm hàm render
    updateColumns.push({
      id: 'actions',
      label: 'Actions',
      width: widthActions > 70 ? widthActions : 70,
      align: 'center',
      stickyCss: isStickyActions ? { right: 0 } : undefined,
    });

    return updateColumns;
  }, [initialColumns, widthActions, isStickyActions]);

  const ref = useRef<HTMLTableElement | null>(null);
  const [widthTable, setWidthTable] = useState(0);

  useEffect(() => {
    if (ref.current) setWidthTable(ref.current.clientWidth);
  }, []);

  return (
    <TableContainerPart>
      <Table sx={{ height: loading || rows.length === 0 ? '100%' : 'none' }}>
        <TableHeadPart columns={columns} />
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <LoadingComponent />
              </TableCell>
            </TableRow>
          ) : rows.length ? (
            rows.map((row, index) => (
              <RowCollapsePart
                columns={columns}
                row={row}
                indexRow={index}
                key={index}
                onDisabled={onDisabled}
                indexLoadingRow={indexLoadingRow}
                collapse={{ ...collapse, columns: [...collapse.columns] }}
                collapseTableWidth={widthTable}
                //
                onSelectRow={onSelectRow}
                onInfoRow={onInfoRow}
                onClickRow={onClickRow}
                onUpdateRow={onUpdateRow}
                onCopyRow={onCopyRow}
                onDeleteRow={onDeleteRow}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <EmptyComponent />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainerPart>
  );
};
