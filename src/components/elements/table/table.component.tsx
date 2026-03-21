/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Fade, SxProps, Table, TableBody, TableCell, TableRow, Theme, useTheme } from '@mui/material';
import React, { JSX, useCallback, useState } from 'react';

import { COLOR } from '../../../common';
import { EmptyComponent } from '../../empty';
import { LoadingComponent } from '../../loading';
import { StackRowAlignJustCenter } from '../../styles';
import { CheckboxElement } from '../check-box';
import { IconElement } from '../icon';
import { ListIconContentElement } from '../list';
import { TooltipOnHoverElement } from '../tooltip';
import { TableContainerPart } from './part/table-container.part';
import { TableHeadPart } from './part/table-head.part';
import { BORDER_TABLE, DISABLED_DEFAULT, getStyleCell, getStyleRow } from './table.constant';
import { TableActions, TableRowKey } from './table.enum';
import { Column, OnClickRow, OnDisabled } from './table.interface';
export interface TableComponentProps<R> {
  loading?: boolean;
  columns: Column<R>[];
  rows?: R[];
  indexLoadingRow?: number;
  isStickyActions?: boolean;
  rowSx?: { [key: number]: SxProps<Theme> };
  rowKey?: (row: R) => string;
  onClickSelectRow?: boolean;

  onClickRow?: OnClickRow<R>;
  onDisabled?: OnDisabled<R>;

  // start row
  selectedRows?: string[];
  onSelectRows?: (ids: string[]) => void;

  // end row
  getRowMenu?: (row: R, index: number) => { content: string; icon: string; onClick: () => void }[];
  onSelectRow?: OnClickRow<R>;
  onDeleteRow?: OnClickRow<R>;
  onInfoRow?: OnClickRow<R>;
  onCopyRow?: OnClickRow<R>;
  onHistoryRow?: OnClickRow<R>;
  onUpdateRow?: OnClickRow<R>;
  /** Allows customizing the icon for actions per-row */
  getActionIcon?: (row: R, index: number, action: keyof typeof TableActions) => string;

  /** Danh sách API permission key để hiển thị table */
  requiredPermissions?: string[];
}

type TableComponentType = <R>(props: TableComponentProps<R>) => JSX.Element;

export const TableComponent: TableComponentType = ({
  loading = false,
  rows,
  columns: initialColumns,
  indexLoadingRow,
  isStickyActions = false,
  rowSx = {},
  rowKey,
  onClickSelectRow = false,

  onClickRow,
  onDisabled,

  // start row
  selectedRows,
  onSelectRows,

  // end row
  onSelectRow,
  onDeleteRow,
  onInfoRow,
  onCopyRow,
  onHistoryRow,
  onUpdateRow,
  getActionIcon,
  getRowMenu,
  requiredPermissions,
}) => {
  rows = rows || [];
  const [tooltipOpen, setTooltipOpen] = useState<{ [key: string]: boolean }>({});

  const { palette } = useTheme();

  const lengthActions = [onSelectRow, onDeleteRow, onInfoRow, onCopyRow, onHistoryRow, onUpdateRow, getRowMenu].filter(
    Boolean,
  ).length;
  const widthActions = lengthActions * 19 + (lengthActions - 1) * 16;

  // start row
  const getRowId = React.useCallback(
    (row: any) => {
      if (rowKey) return rowKey(row);
      return row.id;
    },
    [rowKey],
  );

  const allRowIds = React.useMemo(() => rows.map(getRowId), [rows, getRowId]);
  const isAllSelected = selectedRows && allRowIds.every(id => selectedRows.includes(id));
  const isIndeterminate = selectedRows && selectedRows.length > 0 && !isAllSelected;

  const handleSelectAll = useCallback(() => {
    if (isAllSelected) onSelectRows?.([]);
    else onSelectRows?.(allRowIds);
  }, [isAllSelected, onSelectRows, allRowIds]);

  const handleSelectRow = useCallback(
    (id: string) => {
      if (!selectedRows) return;
      if (selectedRows.includes(id)) {
        onSelectRows?.(selectedRows.filter(i => i !== id));
      } else {
        onSelectRows?.([...selectedRows, id]);
      }
    },
    [selectedRows, onSelectRows],
  );

  const columns = React.useMemo(() => {
    const updateColumns = [...initialColumns];

    if (onSelectRows) {
      updateColumns.unshift({
        id: 'selectCheckbox',
        label: (
          <CheckboxElement
            onClick={e => {
              e.stopPropagation();
              handleSelectAll();
            }}
            checked={isAllSelected}
            indeterminate={isIndeterminate}
          />
        ),
        width: 35,
        alignHead: 'center',
        stickyCss: { left: 0, zIndex: 1.5 },
        render: (row, index) => {
          const disabled = onDisabled ? onDisabled(row, index) : { ...DISABLED_DEFAULT };
          const isCheckboxDisabled = disabled.DISABLED_ROW || disabled.DISABLED_CHECKBOX;
          return (
            <CheckboxElement
              checked={selectedRows?.includes(getRowId(row))}
              disabled={isCheckboxDisabled}
              onClick={e => {
                e.stopPropagation();
                if (isCheckboxDisabled) return;
                handleSelectRow(getRowId(row));
              }}
            />
          );
        },
      });
    }

    if (onSelectRow || onDeleteRow || onInfoRow || onCopyRow || onHistoryRow || onUpdateRow || getRowMenu) {
      updateColumns.push({
        id: 'actions',
        label: 'Actions',
        width: widthActions > 70 ? widthActions : 70,
        alignHead: 'center',
        stickyCss: isStickyActions ? { right: 0, borderLeft: BORDER_TABLE, zIndex: 1.5 } : undefined,
        render: (row, index) => {
          const disabled = onDisabled ? onDisabled(row, index) : { ...DISABLED_DEFAULT };
          const disabledByParent = disabled.DISABLED_ROW || disabled.DISABLED_ALL_ACTIONS;

          const rowId = rowKey ? rowKey(row) : (row as any).id || index;

          const createMenuWithCloseHandler = () => {
            if (!getRowMenu) return [];

            return getRowMenu(row, index).map(menuItem => ({
              ...menuItem,
              onClick: () => {
                menuItem.onClick();
                setTooltipOpen(prev => ({ ...prev, [rowId]: false }));
              },
            }));
          };

          return (
            <StackRowAlignJustCenter gap={1} onClick={e => e.stopPropagation()}>
              {onSelectRow && (
                <IconElement
                  icon='remove_red_eye'
                  onClick={e => {
                    e.stopPropagation();
                    onSelectRow(row, index);
                  }}
                  disabled={disabledByParent || disabled.SELECT}
                />
              )}
              {onDeleteRow && (
                <IconElement
                  icon='delete'
                  onClick={e => {
                    e.stopPropagation();
                    onDeleteRow(row, index);
                  }}
                  color='error'
                  disabled={disabledByParent || disabled.DELETE}
                />
              )}
              {onInfoRow && (
                <IconElement
                  icon='view_cozy'
                  onClick={e => {
                    e.stopPropagation();
                    onInfoRow(row, index);
                  }}
                  disabled={disabledByParent || disabled.INFO}
                />
              )}
              {onCopyRow && (
                <IconElement
                  icon={
                    (getActionIcon && getActionIcon(row, index, 'COPY' as keyof typeof TableActions)) || 'content_copy'
                  }
                  onClick={e => {
                    e.stopPropagation();
                    onCopyRow(row, index);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={disabledByParent || disabled.COPY}
                />
              )}
              {onHistoryRow && (
                <IconElement
                  icon='history'
                  onClick={e => {
                    e.stopPropagation();
                    onHistoryRow(row, index);
                  }}
                  disabled={disabledByParent || disabled.HISTORY_GET_ROW_MENU}
                />
              )}
              {onUpdateRow && (
                <IconElement
                  icon={
                    (getActionIcon && getActionIcon(row, index, 'UPDATE' as keyof typeof TableActions)) || 'settings'
                  }
                  onClick={e => {
                    e.stopPropagation();
                    onUpdateRow(row, index);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={disabledByParent || disabled.UPDATE}
                />
              )}

              {getRowMenu &&
                (!disabled.DISABLED_GET_ROW_MENU ? (
                  <TooltipOnHoverElement
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    placement='bottom-end'
                    open={!!tooltipOpen[rowId]}
                    onOpen={() => setTooltipOpen(prev => ({ ...prev, [rowId]: true }))}
                    onClose={() => setTooltipOpen(prev => ({ ...prev, [rowId]: false }))}
                    content={<ListIconContentElement list={createMenuWithCloseHandler()} />}
                    slotProps={{
                      tooltip: { sx: { backgroundColor: palette.background.paper, color: palette.text.primary } },
                    }}
                  >
                    <IconElement icon='open_in_browser' onClick={e => e.stopPropagation()} />
                  </TooltipOnHoverElement>
                ) : (
                  <IconElement
                    icon='open_in_browser'
                    disabled={disabledByParent || disabled.DISABLED_GET_ROW_MENU}
                    onClick={e => e.stopPropagation()}
                  />
                ))}
            </StackRowAlignJustCenter>
          );
        },
      });
    }

    return updateColumns;
  }, [
    initialColumns,
    onSelectRows,
    selectedRows,
    isAllSelected,
    isIndeterminate,
    handleSelectAll,
    handleSelectRow,
    getRowId,
    onSelectRow,
    onDeleteRow,
    onInfoRow,
    onCopyRow,
    onHistoryRow,
    onUpdateRow,
    getRowMenu,
    widthActions,
    isStickyActions,
    onDisabled,
    rowKey,
    tooltipOpen,
  ]);

  return (
    <TableContainerPart>
      <Table
        stickyHeader
        sx={{
          height: loading || rows.length === 0 ? '100%' : 'none',
          borderCollapse: 'separate !important',
          '& .MuiTableCell-root': {
            borderBottom: BORDER_TABLE,
          },
          '& .MuiTableRow-hover:hover .table-sticky-cell': {
            backgroundColor: `${palette.background.default} !important`,
          },
        }}
      >
        <TableHeadPart columns={columns} />
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <LoadingComponent />
              </TableCell>
            </TableRow>
          ) : rows.length ? (
            rows.map((row, index) => {
              const disabled = onDisabled ? onDisabled(row, index) : { ...DISABLED_DEFAULT };

              return (
                <Fade in={true} key={index} timeout={index * 120}>
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={index}
                    onClick={() => {
                      if (onClickRow) onClickRow(row, index);

                      if (onClickSelectRow && onSelectRows && getRowId) {
                        const id = getRowId(row);
                        handleSelectRow(id);
                      }
                    }}
                    sx={{
                      ...getStyleRow(Boolean(onClickRow), palette, index, rowSx, indexLoadingRow),
                      ...(getRowId(row) === TableRowKey.TOTAL
                        ? {
                            backgroundColor: COLOR.COMMON.green2,
                            '& .MuiTableCell-root': {
                              backgroundColor: COLOR.COMMON.green2,
                            },
                            '& *': {
                              fontWeight: 'bold',
                            },
                          }
                        : {}),
                      ...(getRowId(row) === TableRowKey.TOTAL_INCOME
                        ? {
                            backgroundColor: COLOR.COMMON.gray7,
                            '& .MuiTableCell-root': {
                              backgroundColor: COLOR.COMMON.gray7,
                            },
                            '& *': {
                              fontWeight: 'bold',
                            },
                          }
                        : {}),
                    }}
                  >
                    {columns.map(column => (
                      <TableCell
                        key={column.id}
                        className={column.stickyCss ? 'table-sticky-cell' : undefined}
                        align={column.align}
                        sx={getStyleCell(column, palette, disabled.DISABLED_ROW)}
                        onClick={
                          column.id === 'actions' || column.id === 'selectCheckbox'
                            ? e => {
                                e.stopPropagation();
                              }
                            : undefined
                        }
                      >
                        {column.render ? column.render(row, index) : (row as any)[column.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                </Fade>
              );
            })
          ) : (
            <TableRow>
              <TableCell sx={{ height: 200 }} colSpan={columns.length}>
                <EmptyComponent />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainerPart>
  );
};
