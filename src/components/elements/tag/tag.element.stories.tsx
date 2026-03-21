import type { Meta, StoryObj } from '@storybook/react';

import { StackRow } from '../../styles';
import { IconElement } from '../icon';
import { tagArgTypes } from './tag.argtypes';
import { TagElement } from './tag.element';

const meta: Meta<typeof TagElement> = {
  title: 'Elements/Tag/Tag',
  component: TagElement,
  tags: ['autodocs'],
  args: {
    type: '#1976d2',
    content: 'Primary',
    variant: 'contained',
    size: 'medium',
    variation: 'caption',
  },
  parameters: { layout: 'padded' },
  argTypes: tagArgTypes,
};

export default meta;
type Story = StoryObj<typeof TagElement>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <StackRow>
      <TagElement {...args} variant="contained" content="Contained" />
      <TagElement {...args} variant="outlined" content="Outlined" />
      <TagElement {...args} variant="outlined-border" content="Outlined border" />
    </StackRow>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <StackRow>
      <TagElement {...args} size="small" content="Small" />
      <TagElement {...args} size="medium" content="Medium" />
      <TagElement {...args} size="large" content="Large" />
    </StackRow>
  ),
};

export const Variations: Story = {
  render: (args) => (
    <StackRow>
      <TagElement {...args} variation="caption" content="Caption" />
      <TagElement {...args} variation="body1" content="Body1" />
    </StackRow>
  ),
};

export const FixedWidth: Story = {
  args: {
    width: 120,
    content: 'Fixed width',
  },
};

export const ColorOverride: Story = {
  render: (args) => (
    <StackRow>
      <TagElement {...args} type="#1976d2" variant="contained" color="#111" content="Dark text" />
      <TagElement {...args} type="#2e7d32" variant="contained" color="#fff" content="White text" />
    </StackRow>
  ),
};

export const IconProps: Story = {
  render: (args) => (
    <StackRow>
      <TagElement {...args} type="#0288d1" iconProps={<IconElement icon="info" />} content="Info" />
      <TagElement {...args} type="#ed6c02" iconProps={<IconElement icon="warning" />} content="Warning" />
      <TagElement {...args} type="#d32f2f" iconProps={<IconElement icon="error" />} content="Error" />
    </StackRow>
  ),
};

export const AllMatrix: Story = {
  render: (args) => (
    <StackRow sx={{ flexWrap: 'wrap' }}>
      <TagElement {...args} variant="contained" size="small" content="Contained S" />
      <TagElement {...args} variant="contained" size="medium" content="Contained M" />
      <TagElement {...args} variant="contained" size="large" content="Contained L" />
      <TagElement {...args} variant="outlined" size="small" content="Outlined S" />
      <TagElement {...args} variant="outlined" size="medium" content="Outlined M" />
      <TagElement {...args} variant="outlined" size="large" content="Outlined L" />
      <TagElement {...args} variant="outlined-border" size="small" content="Border S" />
      <TagElement {...args} variant="outlined-border" size="medium" content="Border M" />
      <TagElement {...args} variant="outlined-border" size="large" content="Border L" />
    </StackRow>
  ),
};
