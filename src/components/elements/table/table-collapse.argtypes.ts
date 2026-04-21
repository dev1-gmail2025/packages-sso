import type { ArgTypes } from '@storybook/react';
import type { ComponentProps } from 'react';
import { TableCollapseComponent } from './table-collapse.component';

type TableCollapseProps = ComponentProps<typeof TableCollapseComponent<any, any>>;

export const tableCollapseArgTypes: Partial<ArgTypes<TableCollapseProps>> = {
  loading: {
    control: 'boolean',
    table: { type: { summary: 'boolean' } },
  },
  rows: { control: false },
  columns: { control: false },
  collapse: { control: false },
  indexLoadingRow: {
    control: 'number',
    table: { type: { summary: 'number | undefined' } },
  },
  isStickyActions: {
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  onClickRow: { action: 'rowClicked' },
  onDisabled: { control: false },
  onSelectRow: { action: 'selectAction' },
  onDeleteRow: { action: 'deleteAction' },
  onInfoRow: { action: 'infoAction' },
  onCopyRow: { action: 'copyAction' },
  onUpdateRow: { action: 'updateAction' },
};
