import type { Meta, StoryObj } from '@storybook/react';

import { logoArgTypes } from './logo.argtypes';
import { LogoComponent } from './logo.component';

import logo from '../../assets/logo/logo-main.svg';

const meta: Meta<typeof LogoComponent> = {
  title: 'Components/Composite/Logo',
  component: LogoComponent,
  tags: ['autodocs'],
  args: {
    env: 'local' as any,
    url: logo,
    height: 42,
  },
  parameters: { layout: 'padded' },
  argTypes: logoArgTypes,
};

export default meta;
type Story = StoryObj<typeof LogoComponent>;

export const Default: Story = {};
