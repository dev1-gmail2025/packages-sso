import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import { switchContentArgTypes } from './switch-content.argtypes';
import { SwitchContentElement } from './switch-content.element';

const meta: Meta<typeof SwitchContentElement> = {
  title: 'Elements/Switch/SwitchContent',
  component: SwitchContentElement,
  tags: ['autodocs'],
  args: {
    name: 'notification',
    content: 'Nhận thông báo',
    value: true,
    onChange: fn(),
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: switchContentArgTypes,
};

export default meta;
type Story = StoryObj<typeof SwitchContentElement>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<boolean>(!!args.value);

    return (
      <SwitchContentElement
        {...args}
        value={value}
        onChange={eventLike => {
          setValue(eventLike.target.value);
          args.onChange && args.onChange(eventLike);
        }}
      />
    );
  },
};
