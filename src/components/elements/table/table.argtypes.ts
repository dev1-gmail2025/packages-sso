import type { ArgTypes } from '@storybook/react';
import type { ComponentProps } from 'react';
import { TableComponent } from './table.component';

type TableProps = ComponentProps<typeof TableComponent<any>>;

export const tableArgTypes: Partial<ArgTypes<TableProps>> = {
  loading: {
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  columns: {
    control: false,
    table: { type: { summary: 'Column<R>[]' } },
  },
  rows: {
    control: false,
    table: { type: { summary: 'R[]' } },
  },
  indexLoadingRow: {
    control: 'number',
    table: { type: { summary: 'number | undefined' } },
  },
  isStickyActions: {
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  onClickSelectRow: {
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  selectedRows: { control: false },
  rowSx: { control: false },
  rowKey: { control: false },
  requiredPermissions: { control: false },
  onClickRow: { action: 'rowClicked' },
  onSelectRows: { action: 'rowsSelected' },
  onSelectRow: { action: 'selectAction' },
  onDeleteRow: { action: 'deleteAction' },
  onInfoRow: { action: 'infoAction' },
  onCopyRow: { action: 'copyAction' },
  onHistoryRow: { action: 'historyAction' },
  onUpdateRow: { action: 'updateAction' },
  getActionIcon: { control: false },
  getRowMenu: { control: false },
  onDisabled: { control: false },
};

