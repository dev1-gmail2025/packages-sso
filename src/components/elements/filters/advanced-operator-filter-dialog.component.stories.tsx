import { Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { STYLE } from '../../../common';
import { StackJustCenter } from '../../styles';
import { ButtonElement } from '../button';
import { AdvancedOperatorFilterDialog } from './advanced-operator-filter-dialog.component';
import { DateFilterMacro, FilterOperator } from './filter.enum';
import type { AdvancedOperatorFilterField, FilterRule } from './filter.interface';

const demoFields: AdvancedOperatorFilterField[] = [
  {
    key: 'status',
    label: 'Trạng thái',
    type: 'select',
    defaultValue: '',
    options: [
      { label: 'Tất cả', value: '' },
      { label: 'Active', value: 'Active' },
      { label: 'Inactive', value: 'Inactive' },
    ],
  },
  {
    key: 'createdAt',
    label: 'Ngày tạo',
    type: 'date',
    defaultValue: DateFilterMacro.TODAY,
  },
];

const meta: Meta<typeof AdvancedOperatorFilterDialog> = {
  title: 'Elements/Filters/AdvancedOperatorFilterDialog',
  component: AdvancedOperatorFilterDialog,
  tags: ['autodocs'],
  args: {
    open: false,
    title: 'Tùy chỉnh bộ lọc nâng cao',
    fields: demoFields,
    value: [],
    fullOperator: false,
    offset: { x: 0, y: 8 },
    onClose: fn(),
    onApply: fn(),
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AdvancedOperatorFilterDialog>;

const WithAnchor: React.FC<React.ComponentProps<typeof AdvancedOperatorFilterDialog>> = args => {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<boolean>(Boolean(args.open));

  useEffect(() => setOpen(Boolean(args.open)), [args.open]);

  const currentValue: FilterRule[] = useMemo(() => args.value || [], [args.value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StackJustCenter sx={{ minHeight: '300px', p: STYLE.PADDING_GAP_LAYOUT }}>
        <StackJustCenter>
          <ButtonElement ref={anchorRef} content='Open dialog' onClick={() => setOpen(true)} />
          <Typography>Popover sẽ neo theo nút này (anchorEl).</Typography>
        </StackJustCenter>

        <AdvancedOperatorFilterDialog
          {...args}
          open={open}
          anchorEl={anchorRef.current}
          value={currentValue}
          onClose={() => {
            setOpen(false);
            args.onClose();
          }}
          onApply={next => {
            args.onApply(next);
          }}
        />
      </StackJustCenter>
    </LocalizationProvider>
  );
};

export const Default: Story = {
  render: args => <WithAnchor {...args} />,
};

export const WithPresetRules: Story = {
  render: args => <WithAnchor {...args} />,
  args: {
    value: [
      { field: 'status', operator: FilterOperator.Equals, value: 'Active' },
      { field: 'createdAt', operator: FilterOperator.Equals, value: DateFilterMacro.TODAY },
    ],
  },
};

export const FullOperator: Story = {
  render: args => <WithAnchor {...args} />,
  args: {
    fullOperator: true,
    value: [
      { field: 'status', operator: FilterOperator.Contains, value: 'Act' },
      { field: 'createdAt', operator: FilterOperator.Equals, value: `${DateFilterMacro.EXACT}|2026-04-23` },
    ],
  },
};

export const DateRangeMacro: Story = {
  render: args => <WithAnchor {...args} />,
  args: {
    value: [
      {
        field: 'createdAt',
        operator: FilterOperator.Equals,
        value: `${DateFilterMacro.DATE_RANGE}|2026-04-01|2026-04-23`,
      },
    ],
  },
};
