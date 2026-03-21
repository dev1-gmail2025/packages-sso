import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import { switchArgTypes } from './switch.argtypes';
import { SwitchElement } from './switch.element';

const meta: Meta<typeof SwitchElement> = {
  title: 'Elements/Switch/Switch',
  component: SwitchElement,
  tags: ['autodocs'],
  args: {
    name: 'switch',
    value: false,
    onChange: fn(),
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: switchArgTypes,
};

export default meta;
type Story = StoryObj<typeof SwitchElement>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<boolean>(args.value);

    return (
      <SwitchElement
        {...args}
        value={value}
        onChange={(eventLike) => {
          setValue(eventLike.target.value);
          args.onChange && args.onChange(eventLike);
        }}
      />
    );
  },
};
