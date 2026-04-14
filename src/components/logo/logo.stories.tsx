import type { Meta, StoryObj } from '@storybook/react';

import { Environment } from '../../common';
import { logoArgTypes } from './logo.argtypes';
import { LogoComponent, LogoName } from './logo.component';
import { StackRow, StackAlignCenter } from '../styles';

const meta: Meta<typeof LogoComponent> = {
  title: 'Elements/Composite/Logo',
  component: LogoComponent,
  tags: ['autodocs'],
  args: {
    env: Environment.DEVELOP as any,
    logoName: LogoName.MAIN,
    height: 42,
  },
  parameters: { layout: 'padded' },
  argTypes: logoArgTypes,
};

export default meta;
type Story = StoryObj<typeof LogoComponent>;

export const Default: Story = {};

export const GalleryMatrix: Story = {
  render: () => {
    const logos = Object.values(LogoName);
    return (
      <StackRow sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
        {logos.map(logo => (
          <StackRow key={logo}>
            <LogoComponent env={Environment.DEVELOP} logoName={logo} />
          </StackRow>
        ))}
      </StackRow>
    );
  },
};
