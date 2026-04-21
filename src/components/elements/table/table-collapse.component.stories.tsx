import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TableCollapseComponent } from './table-collapse.component';
import { tableCollapseArgTypes } from './table-collapse.argtypes';
import type { CollapseProps, Column } from './table.interface';

type ParentRow = {
  id: string;
  category: string;
  owner: string;
  children: ChildRow[];
};

type ChildRow = {
  id: string;
  name: string;
  amount: number;
};

const parentColumns: Column<ParentRow>[] = [
  { id: 'category', label: 'Category', width: 220 },
  { id: 'owner', label: 'Owner', width: 180 },
];

const childColumns: Column<ChildRow>[] = [
  { id: 'name', label: 'Name', width: 220 },
  {
    id: 'amount',
    label: 'Amount',
    width: 160,
    align: 'right',
    alignHead: 'right',
    render: (row) => row.amount.toLocaleString('en-US'),
  },
];

const parentRows: ParentRow[] = [
  {
    id: 'g1',
    category: 'Infrastructure',
    owner: 'System Team',
    children: [
      { id: 'c1', name: 'CPU Usage', amount: 70 },
      { id: 'c2', name: 'Memory Usage', amount: 62 },
    ],
  },
  {
    id: 'g2',
    category: 'Applications',
    owner: 'Product Team',
    children: [
      { id: 'c3', name: 'API Latency', amount: 120 },
      { id: 'c4', name: 'Error Rate', amount: 3 },
    ],
  },
];

const collapseConfig: CollapseProps<ParentRow, ChildRow> = {
  title: 'Detail rows',
  property: 'children',
  columns: childColumns,
};

const meta: Meta<typeof TableCollapseComponent<ParentRow, ChildRow>> = {
  title: 'Elements/Table/TableCollapse',
  component: TableCollapseComponent<ParentRow, ChildRow>,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    loading: false,
    rows: parentRows,
    columns: parentColumns,
    collapse: collapseConfig,
    onClickRow: fn(),
    onDisabled: () => ({}),
  },
  argTypes: tableCollapseArgTypes,
};

export default meta;
type Story = StoryObj<typeof TableCollapseComponent<ParentRow, ChildRow>>;

export const Default: Story = {
  render: (args) => (
    <Box sx={{ minWidth: 760 }}>
      <TableCollapseComponent<ParentRow, ChildRow> {...args} />
    </Box>
  ),
};

export const Loading: Story = {
  render: (args) => (
    <Box sx={{ minWidth: 760 }}>
      <TableCollapseComponent<ParentRow, ChildRow> {...args} />
    </Box>
  ),
  args: {
    loading: true,
  },
};

export const WithActions: Story = {
  render: (args) => (
    <Box sx={{ minWidth: 880 }}>
      <TableCollapseComponent<ParentRow, ChildRow> {...args} />
    </Box>
  ),
  args: {
    onSelectRow: fn(),
    onDeleteRow: fn(),
    onInfoRow: fn(),
    onCopyRow: fn(),
    onUpdateRow: fn(),
    isStickyActions: true,
  },
};
