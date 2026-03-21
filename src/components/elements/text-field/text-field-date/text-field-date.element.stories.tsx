import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import { textFieldDateArgTypes } from './text-field-date.argtypes';
import { TextFieldDateElement } from './text-field-date.element';
import { useState } from 'react';

const meta: Meta<typeof TextFieldDateElement> = {
  title: 'Elements/TextField/TextFieldDate',
  component: TextFieldDateElement,
  tags: ['autodocs'],
  args: {
    name: 'birthday',
    label: 'Ngày sinh',
    iconLabel: 'event',
    value: dayjs().toISOString(),
    format: 'DD/MM/YYYY',
    required: false,
    disablePast: false,
    disableFuture: false,
    error: '',
    helperText: '',
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: textFieldDateArgTypes,
};

export default meta;
type Story = StoryObj<typeof TextFieldDateElement>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<string>(args.value ?? '');
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TextFieldDateElement {...args} value={value} onChange={e => setValue(e.target.value)} />
      </LocalizationProvider>
    );
  },
};

export const Required: Story = {
  render: args => {
    const [value, setValue] = useState<string>(args.value ?? '');
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TextFieldDateElement {...args} value={value} onChange={e => setValue(e.target.value)} />
      </LocalizationProvider>
    );
  },
  args: {
    required: true,
  },
};

export const ErrorState: Story = {
  render: args => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TextFieldDateElement {...args} />
    </LocalizationProvider>
  ),
  args: {
    error: 'Ngày không hợp lệ',
    helperText: 'Vui lòng chọn lại',
  },
};
