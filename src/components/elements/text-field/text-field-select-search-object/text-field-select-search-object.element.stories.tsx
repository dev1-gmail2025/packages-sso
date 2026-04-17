import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TextFieldSelectSearchObjectElement } from './text-field-select-search-object.element';
import { textFieldSelectSearchObjectArgTypes } from './text-field-select-search-object.argtypes';

const baseOptions = [
  { label: 'Alice\nDeveloper', value: 'alice', url: 'https://i.pravatar.cc/64?img=1' },
  { label: 'Bob\nDesigner', value: 'bob', url: 'https://i.pravatar.cc/64?img=2' },
  { label: 'Charlie\nPM', value: 'charlie', url: 'https://i.pravatar.cc/64?img=3' },
];

const meta: Meta<typeof TextFieldSelectSearchObjectElement> = {
  title: 'Elements/TextField/TextFieldSelectSearchObject',
  component: TextFieldSelectSearchObjectElement,
  tags: ['autodocs'],
  args: {
    name: 'field',
    label: 'Search object',
    iconLabel: 'search',
    placeholder: 'Tìm kiếm...',
    helperText: 'Gõ để search, chọn để set value',
    options: baseOptions,
    multiple: false,
    freeSolo: false,
    showAvatar: false,
    maxDisplayTags: 3,
    disabled: false,
    required: false,
    loading: false,
    error: '',
    value: null,
    onChange: undefined,
    onInputChange: undefined,
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: textFieldSelectSearchObjectArgTypes,
};

export default meta;
type Story = StoryObj<typeof TextFieldSelectSearchObjectElement>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = React.useState<any>(args.value ?? null);
    const [options, setOptions] = React.useState<any[]>(Array.isArray(args.options) ? args.options : []);
    const [loading, setLoading] = React.useState<boolean>(Boolean(args.loading));

    return (
      <TextFieldSelectSearchObjectElement
        {...args}
        options={options}
        loading={loading}
        value={value}
        getOptionLabel={(opt: any) => opt?.label ?? ''}
        isOptionEqualToValue={(opt: any, val: any) => opt?.value === val?.value}
        onChange={event => {
          setValue(event.target.value);
          args.onChange?.(event);
        }}
        onInputChange={(event, newInputValue, reason) => {
          if (reason === 'input') {
            setLoading(true);
            // Fake async search to demonstrate loading UI.
            window.setTimeout(() => {
              const next = baseOptions.filter(opt =>
                String(opt.label).toLowerCase().includes(String(newInputValue).toLowerCase()),
              );
              setOptions(next);
              setLoading(false);
            }, 400);
          }
          args.onInputChange?.(event, newInputValue, reason);
        }}
      />
    );
  },
};

export const WithoutLabel: Story = {
  ...Default,
  args: {
    label: undefined,
    iconLabel: '',
  },
};

export const ErrorState: Story = {
  ...Default,
  args: {
    error: 'Invalid value',
    helperText: 'Please check your input',
  },
};

export const Loading: Story = {
  ...Default,
  args: {
    loading: true,
  },
};

export const Multiple: Story = {
  render: args => {
    const [value, setValue] = React.useState<any[]>(Array.isArray(args.value) ? args.value : []);

    return (
      <TextFieldSelectSearchObjectElement
        {...args}
        multiple
        value={value}
        options={Array.isArray(args.options) ? args.options : baseOptions}
        getOptionLabel={(opt: any) => opt?.label ?? ''}
        isOptionEqualToValue={(opt: any, val: any) => opt?.value === val?.value}
        onChange={event => {
          setValue(event.target.value as unknown as any[]);
          args.onChange?.(event);
        }}
      />
    );
  },
  args: {
    value: [baseOptions[0], baseOptions[1]],
    maxDisplayTags: 2,
  },
};

export const WithAvatar: Story = {
  ...Default,
  args: {
    showAvatar: true,
  },
};

export const WithDisabledOption: Story = {
  ...Default,
  args: {
    getOptionDisabled: (option: any) => option?.value === 'bob',
    value: baseOptions[0],
  },
};

export const FreeSolo: Story = {
  ...Default,
  args: {
    freeSolo: true,
  },
};

