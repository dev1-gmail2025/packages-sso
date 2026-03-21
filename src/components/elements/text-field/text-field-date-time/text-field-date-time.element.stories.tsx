import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import { textFieldDateTimeArgTypes } from './text-field-date-time.argtypes';
import { TextFieldDateTimeElement } from './text-field-date-time.element';

const meta: Meta<typeof TextFieldDateTimeElement> = {
  title: 'Elements/TextField/TextFieldDateTime',
  component: TextFieldDateTimeElement,
  tags: ['autodocs'],
  args: {
    name: 'scheduleAt',
    label: 'Schedule at',
    required: false,
    disablePast: false,
    disableFuture: false,
    dateRangeInDays: undefined,
    value: dayjs().add(1, 'day').toISOString(),
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: textFieldDateTimeArgTypes,
};

export default meta;
type Story = StoryObj<typeof TextFieldDateTimeElement>;

export const Default: Story = {
  render: (args) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TextFieldDateTimeElement {...args} />
    </LocalizationProvider>
  ),
};

export const WithLabelAndRequired: Story = {
  render: (args) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TextFieldDateTimeElement {...args} />
    </LocalizationProvider>
  ),
  args: {
    required: true,
    label: 'Meeting time',
  },
};

export const DisablePast: Story = {
  render: (args) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TextFieldDateTimeElement {...args} />
    </LocalizationProvider>
  ),
  args: {
    disablePast: true,
    value: dayjs().add(2, 'hour').toISOString(),
  },
};

export const DateRangeInDays: Story = {
  render: (args) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TextFieldDateTimeElement {...args} />
    </LocalizationProvider>
  ),
  args: {
    dateRangeInDays: 7,
  },
};
