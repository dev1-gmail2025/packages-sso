import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TextFieldNumberElement } from './text-field-number.element';
import { textFieldNumberArgTypes } from './text-field-number.argtypes';

const meta: Meta<typeof TextFieldNumberElement> = {
  title: 'Elements/TextField/TextFieldNumber',
  component: TextFieldNumberElement,
  tags: ['autodocs'],
  args: {
    name: 'amount',
    label: 'Số tiền',
    iconLabel: 'paid',
    placeholder: 'Nhập số...',
    value: 1234567,
    decimalScale: 0,
    showResetButton: true,
    required: false,
    disabled: false,
    error: '',
    helperText: 'Ví dụ: 1,234,567',
    onChange: undefined,
    onReset: undefined,
    isAllowed: undefined,
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: textFieldNumberArgTypes,
};

export default meta;
type Story = StoryObj<typeof TextFieldNumberElement>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = React.useState<any>(args.value ?? undefined);

    return (
      <TextFieldNumberElement
        {...args}
        value={value}
        onChange={event => {
          setValue(event.target.value);
          args.onChange?.(event);
        }}
        onReset={() => {
          setValue(undefined);
          args.onReset?.();
        }}
      />
    );
  },
};

export const Decimal: Story = {
  ...Default,
  args: {
    label: 'Số thập phân',
    iconLabel: 'functions',
    value: 1234.5,
    decimalScale: 5,
    helperText: 'Decimal scale = 2',
  },
};

export const ErrorState: Story = {
  ...Default,
  args: {
    error: 'Giá trị không hợp lệ',
    helperText: 'Vui lòng nhập lại',
  },
};

export const WithoutLabel: Story = {
  ...Default,
  args: {
    label: undefined,
    iconLabel: '',
  },
};

export const WithoutResetButton: Story = {
  ...Default,
  args: {
    showResetButton: false,
  },
};

export const WithIsAllowed: Story = {
  render: args => {
    const [value, setValue] = React.useState<any>(args.value ?? undefined);

    return (
      <TextFieldNumberElement
        {...args}
        value={value}
        isAllowed={values => {
          const next = values?.floatValue;
          return next === undefined || (Number.isFinite(next) && next <= 1000);
        }}
        helperText='Chỉ cho phép giá trị ≤ 1,000'
        onChange={event => {
          setValue(event.target.value);
          args.onChange?.(event);
        }}
        onReset={() => {
          setValue(undefined);
          args.onReset?.();
        }}
      />
    );
  },
  args: {
    value: 999,
  },
};
