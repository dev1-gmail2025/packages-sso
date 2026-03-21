import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import dayjs from 'dayjs';
import { useState } from 'react';
import { textFieldDateRangeArgTypes } from './text-field-date-range.argtypes';
import { TextFieldDateRangeElement } from './text-field-date-range.element';

const meta: Meta<typeof TextFieldDateRangeElement> = {
  title: 'Elements/TextField/TextFieldDateRange',
  component: TextFieldDateRangeElement,
  tags: ['autodocs'],
  args: {
    fromDate: dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
    toDate: dayjs().format('YYYY-MM-DD'),
    placeholder: 'Ngày bắt đầu — Ngày kết thúc',
    format: 'DD/MM/YYYY',
    disabled: false,
    onFromDateChange: fn(),
    onToDateChange: fn(),
    onDateRangeChange: fn(),
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: textFieldDateRangeArgTypes,
};

export default meta;
type Story = StoryObj<typeof TextFieldDateRangeElement>;

export const Default: Story = {
  render: (args) => {
    const [fromDate, setFromDate] = useState<string>(args.fromDate ?? '');
    const [toDate, setToDate] = useState<string>(args.toDate ?? '');

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TextFieldDateRangeElement
          {...args}
          fromDate={fromDate}
          toDate={toDate}
          onFromDateChange={(d) => {
            setFromDate(d);
            args.onFromDateChange?.(d);
          }}
          onToDateChange={(d) => {
            setToDate(d);
            args.onToDateChange?.(d);
          }}
        />
      </LocalizationProvider>
    );
  },
};

export const EmptyValues: Story = {
  render: (args) => {
    const [fromDate, setFromDate] = useState<string>(args.fromDate ?? '');
    const [toDate, setToDate] = useState<string>(args.toDate ?? '');

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TextFieldDateRangeElement
          {...args}
          fromDate={fromDate}
          toDate={toDate}
          onFromDateChange={(d) => {
            setFromDate(d);
            args.onFromDateChange?.(d);
          }}
          onToDateChange={(d) => {
            setToDate(d);
            args.onToDateChange?.(d);
          }}
        />
      </LocalizationProvider>
    );
  },
  args: {
    fromDate: '',
    toDate: '',
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [fromDate, setFromDate] = useState<string>(args.fromDate ?? '');
    const [toDate, setToDate] = useState<string>(args.toDate ?? '');

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TextFieldDateRangeElement
          {...args}
          fromDate={fromDate}
          toDate={toDate}
          onFromDateChange={(d) => {
            setFromDate(d);
            args.onFromDateChange?.(d);
          }}
          onToDateChange={(d) => {
            setToDate(d);
            args.onToDateChange?.(d);
          }}
        />
      </LocalizationProvider>
    );
  },
  args: {
    disabled: true,
  },
};

export const CustomFormat: Story = {
  render: (args) => {
    const [fromDate, setFromDate] = useState<string>(args.fromDate ?? '');
    const [toDate, setToDate] = useState<string>(args.toDate ?? '');

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TextFieldDateRangeElement
          {...args}
          fromDate={fromDate}
          toDate={toDate}
          onFromDateChange={(d) => {
            setFromDate(d);
            args.onFromDateChange?.(d);
          }}
          onToDateChange={(d) => {
            setToDate(d);
            args.onToDateChange?.(d);
          }}
        />
      </LocalizationProvider>
    );
  },
  args: {
    format: 'MM/DD/YYYY',
  },
};
