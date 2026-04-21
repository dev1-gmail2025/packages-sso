import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React, { useState } from 'react';
import { Stack } from '@mui/system';
import { tableArgTypes } from './table.argtypes';
import { TableComponent } from './table.component';
import type { Column } from './table.interface';

type DemoRow = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
};

const demoColumns: Column<DemoRow>[] = [
  { id: 'name', label: 'Name', width: 180 },
  { id: 'email', label: 'Email', width: 230, copyable: true },
  { id: 'role', label: 'Role', width: 120, align: 'center', alignHead: 'center' },
  {
    id: 'status',
    label: 'Status',
    width: 120,
    align: 'center',
    alignHead: 'center',
    render: (row) => (row.status === 'Active' ? 'Active' : 'Inactive'),
  },
];

const demoRows = Array.from({ length: 20 }, (_, index) => ({
  id: `u${index + 1}`,
  name: `Le Van C ${index + 1}`,
  email: `c${index + 1}@company.com`,
  role: 'Viewer',
  status: 'Inactive',
}));

const meta: Meta<typeof TableComponent<DemoRow>> = {
  title: 'Elements/Table/Table',
  component: TableComponent<DemoRow>,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    loading: false,
    columns: demoColumns,
    rows: demoRows,
    onClickSelectRow: false,
    isStickyActions: false,
    indexLoadingRow: undefined,
    onClickRow: fn(),
    onDisabled: () => ({}),
    getRowMenu: () => [
      { content: 'Open', icon: 'open_in_new', onClick: fn() },
      { content: 'History', icon: 'history', onClick: fn() },
      { content: 'Update', icon: 'update', onClick: fn() },
    ],
  },
  argTypes: tableArgTypes,
};

export default meta;
type Story = StoryObj<typeof TableComponent<DemoRow>>;

export const Default: Story = {
  render: (args) => (
    <Stack sx={{ width: '100%', height: '300px' }}>
      <TableComponent<DemoRow> {...args} />
    </Stack>
  ),
};

export const Loading: Story = {
  render: (args) => <TableComponent<DemoRow> {...args} />,
  args: {
    loading: true,
  },
};

export const Empty: Story = {
  render: (args) => <TableComponent<DemoRow> {...args} />,
  args: {
    rows: [],
  },
};

export const WithActionsAndSelect: Story = {
  render: (args) => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    return (
      <TableComponent<DemoRow>
        {...args}
        selectedRows={selectedRows}
        onSelectRows={(ids) => {
          setSelectedRows(ids);
          args.onSelectRows?.(ids);
        }}
      />
    );
  },
  args: {
    onSelectRows: fn(),
    onSelectRow: fn(),
    onDeleteRow: fn(),
    onInfoRow: fn(),
    onCopyRow: fn(),
    onHistoryRow: fn(),
    onUpdateRow: fn(),
    getRowMenu: (row) => [
      { content: `Open ${row.name}`, icon: 'open_in_new', onClick: fn() },
      { content: 'View detail', icon: 'info', onClick: fn() },
    ],
    onDisabled: (_row: DemoRow, index: number) => ({
      DELETE: index === 0,
      UPDATE: index === 2,
    }),
    onClickSelectRow: true,
    isStickyActions: true,
  },
};
