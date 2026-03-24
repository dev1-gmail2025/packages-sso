/* eslint-disable @typescript-eslint/no-explicit-any */
import { Collapse, Fade, Stack, SxProps, TableCell, TableRow, Theme, useTheme } from '@mui/material';
import React, { JSX, useState } from 'react';
import { STYLE } from '../../../../common';
import { StackRowAlignJustCenter } from '../../../styles';
import { IconContentElement, IconElement } from '../../icon';
import { TableComponent } from '../table.component';
import { DISABLED_DEFAULT, getStyleCell, getStyleRow } from '../table.constant';
import { CollapseProps, Column, OnClickRow, OnDisabled } from '../table.interface';

export interface RowCollapsePartProps<R, RC> {
  columns: Column<R>[];
  row: R;
  indexRow: number;
  indexLoadingRow?: number;
  collapse: CollapseProps<R, RC>;
  isStickyActions?: boolean;
  rowSx?: { [key: number]: SxProps<Theme> };
  collapseTableWidth?: number;

  onClickRow?: OnClickRow<R>;
  onDisabled?: OnDisabled<R>;

  // end row
  onSelectRow?: OnClickRow<R>;
  onDeleteRow?: OnClickRow<R>;
  onInfoRow?: OnClickRow<R>;
  onCopyRow?: OnClickRow<R>;
  onUpdateRow?: OnClickRow<R>;
}

type RowCollapsePartType = <R, RC>(props: RowCollapsePartProps<R, RC>) => JSX.Element;

export const RowCollapsePart: RowCollapsePartType = ({
  columns,
  row,
  indexRow,
  indexLoadingRow,
  collapse,
  rowSx = {},
  collapseTableWidth,

  onClickRow,
  onDisabled,

  // end row
  onSelectRow,
  onDeleteRow,
  onInfoRow,
  onCopyRow,
  onUpdateRow,
}) => {
  const { palette } = useTheme();

  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);

  const toggleCollapse = async (row: any, indexRow: number) => {
    setOpen(!open);

    if (!collapse.onOpenCollapse || state) return;

    setLoading(true);

    try {
      const data = await collapse.onOpenCollapse(row, indexRow);

      setState(collapse.property ? data[collapse.property!] : data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Add render vào column actions
  columns[columns.length - 1].render = (row, index) => {
    const disabled = onDisabled ? onDisabled(row, index) : { ...DISABLED_DEFAULT };

    const disabledByParent = disabled.DISABLED_ROW || disabled.DISABLED_ALL_ACTIONS;

    return (
      <StackRowAlignJustCenter gap={1}>
        {onSelectRow && (
          <IconElement
            icon='info'
            onClick={() => onSelectRow(row, index)}
            disabled={disabledByParent || disabled.SELECT}
          />
        )}
        {onInfoRow && (
          <IconElement
            icon='view_cozy'
            onClick={() => onInfoRow(row, index)}
            disabled={disabledByParent || disabled.INFO}
          />
        )}
        {onDeleteRow && (
          <IconElement
            icon='delete'
            onClick={() => onDeleteRow(row, index)}
            disabled={disabledByParent || disabled.DELETE}
          />
        )}
        {onCopyRow && (
          <IconElement
            icon='content_copy'
            onClick={() => onCopyRow(row, index)}
            disabled={disabledByParent || disabled.COPY}
          />
        )}
        {onUpdateRow && (
          <IconElement
            icon='settings'
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onUpdateRow(row, index);
            }}
            disabled={disabledByParent || disabled.UPDATE}
          />
        )}
        <IconElement
          onClick={() => toggleCollapse(row, indexRow)}
          icon={open ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
          disabled={disabledByParent || disabled.COLLAPSE}
        />
      </StackRowAlignJustCenter>
    );
  };

  const disabled = onDisabled ? onDisabled(row, indexRow) : { ...DISABLED_DEFAULT };

  return (
    <React.Fragment>
      <Fade in={true} timeout={indexRow * 120}>
        <TableRow
          hover
          tabIndex={-1}
          onClick={() => onClickRow && onClickRow(row, indexRow)}
          sx={getStyleRow(Boolean(onClickRow), palette, indexRow, rowSx, indexLoadingRow)}
        >
          {columns.map(column => (
            <TableCell key={column.id} align={column.align} sx={getStyleCell(column, palette, disabled.DISABLED_ROW)}>
              {column.render ? column.render(row, indexRow) : (row as any)[column.id]}
            </TableCell>
          ))}
        </TableRow>
      </Fade>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={columns.length + 2}>
          <Stack
            sx={{
              display: 'flex',
              overflowX: 'auto',
              maxWidth: '100%',
              width: (collapseTableWidth || 0) - parseInt(STYLE.PADDING_GAP_LAYOUT, 10) * 2 || 'auto',
            }}
          >
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Stack
                sx={{
                  padding: STYLE.PADDING_GAP_LAYOUT,
                  borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
                  backgroundColor: palette.background.default,
                }}
              >
                <IconContentElement icon={collapse.iconTitle || 'filter_list'} content={collapse.title} size='medium' />

                <TableComponent
                  loading={loading}
                  columns={collapse.columns}
                  isStickyActions={collapse.isStickyActions}
                  //
                  rows={collapse.onOpenCollapse ? state : (row as any)[collapse.property!]}
                  onClickRow={collapse.onClickRow}
                  onDisabled={collapse.onDisabled}
                  //
                  onSelectRow={collapse.onSelectRow}
                  onDeleteRow={collapse.onDeleteRow}
                  onInfoRow={collapse.onInfoRow}
                  onCopyRow={collapse.onCopyRow}
                  onUpdateRow={collapse.onUpdateRow}
                />
              </Stack>
            </Collapse>
          </Stack>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
