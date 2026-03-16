import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { checkboxArgTypes } from './check-box.argtypes';
import { CheckboxElement } from './check-box.element';

const meta: Meta<typeof CheckboxElement> = {
  title: 'Components/CheckBox/CheckBox',
  component: CheckboxElement,
  tags: ['autodocs'],
  args: {
    label: 'Accept terms and conditions',
    onChange: fn(),
    color: 'primary',
    size: 'small',
  },
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  argTypes: checkboxArgTypes,
};

export default meta;
type Story = StoryObj<typeof CheckboxElement>;

export const Default: Story = {};

export const States: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <CheckboxElement {...args} label='Unchecked' checked={false} />
      <CheckboxElement {...args} label='Checked' checked />
      <CheckboxElement {...args} label='Indeterminate' indeterminate />
      <CheckboxElement {...args} label='Disabled unchecked' checked={false} disabled />
      <CheckboxElement {...args} label='Disabled checked' checked disabled />
    </div>
  ),
};

export const Sizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <CheckboxElement {...args} size='small' label='Small size' />
      <CheckboxElement {...args} size='medium' label='Medium size' />
    </div>
  ),
};
