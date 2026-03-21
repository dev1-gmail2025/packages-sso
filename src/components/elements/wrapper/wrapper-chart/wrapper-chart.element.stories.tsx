import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { wrapperChartArgTypes } from './wrapper-chart.argtypes';
import { WrapperChartElement } from './wrapper-chart.element';

const meta: Meta<typeof WrapperChartElement> = {
  title: 'Elements/Wrapper/WrapperChart',
  component: WrapperChartElement,
  tags: ['autodocs'],
  args: {
    name: 'Revenue',
    loading: false,
  },
  parameters: { layout: 'padded' },
  argTypes: wrapperChartArgTypes,
};

export default meta;
type Story = StoryObj<typeof WrapperChartElement>;

export const Default: Story = {
  render: (args) => (
    <Box sx={{ height: 260 }}>
      <WrapperChartElement
        {...args}
        chart={<Box sx={{ height: '100%', border: '1px dashed #ddd', borderRadius: 1 }} />}
      />
    </Box>
  ),
};

export const Loading: Story = {
  args: { loading: true },
  render: (args) => (
    <Box sx={{ height: 260 }}>
      <WrapperChartElement
        {...args}
        chart={<Box sx={{ height: '100%', border: '1px dashed #ddd', borderRadius: 1 }} />}
      />
    </Box>
  ),
};
