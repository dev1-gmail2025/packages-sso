import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import { RadioElement } from '../radio.element';
import { RadioGroupElement } from './radio-group.element';
import { radioGroupArgTypes } from './radio-group.argtypes';

const meta: Meta<typeof RadioGroupElement> = {
  title: 'Elements/Radio/RadioGroup',
  component: RadioGroupElement,
  tags: ['autodocs'],
  args: {
    name: 'status',
    label: 'Trạng thái',
    direction: 'row',
    defaultValue: 'active',
    iconLabel: 'toggle_on',
    onChange: fn(),
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: radioGroupArgTypes,
};

export default meta;
type Story = StoryObj<typeof RadioGroupElement>;

export const Default: Story = {
  render: (args) => (
    <RadioGroupElement {...args}>
      <RadioElement value="active" label="Active" />
      <RadioElement value="inactive" label="Inactive" />
    </RadioGroupElement>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('active');

    return (
      <Stack spacing={1}>
        <RadioGroupElement
          {...args}
          value={value}
          onChange={(eventLike) => {
            setValue(eventLike.target.value);
            args.onChange && args.onChange(eventLike);
          }}
        >
          <RadioElement value="active" label="Active" />
          <RadioElement value="inactive" label="Inactive" />
          <RadioElement value="pending" label="Pending" />
        </RadioGroupElement>
      </Stack>
    );
  },
};
