import type { Meta, StoryObj } from '@storybook/react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { fn } from '@storybook/test';
import { CollapsibleSection } from './collapsible-section.component';
import { collapsibleSectionArgTypes } from './collapsible-section.argtypes';

const meta: Meta<typeof CollapsibleSection> = {
  title: 'Elements/CollapsibleSection',
  component: CollapsibleSection,
  tags: ['autodocs'],
  args: {
    title: 'Thông tin nâng cao',
    defaultExpanded: true,
  },
  parameters: {
    layout: 'padded',
    chromatic: { disableSnapshot: false },
  },
  argTypes: collapsibleSectionArgTypes,
};

export default meta;
type Story = StoryObj<typeof CollapsibleSection>;

export const Default: Story = {
  render: (args) => (
    <Box sx={{ maxWidth: 720 }}>
      <CollapsibleSection {...args}>
        <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
          Nội dung có thể thu gọn/mở rộng. Click vào tiêu đề hoặc icon để toggle.
        </Typography>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography sx={{ fontWeight: 600, mb: 1 }}>Card content</Typography>
          <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
            Đây là ví dụ dùng trong admin dashboard, thường để nhóm các field/tuỳ chọn nâng cao.
          </Typography>
        </Paper>
      </CollapsibleSection>
    </Box>
  ),
};

export const InitiallyCollapsed: Story = {
  ...Default,
  args: {
    title: 'Advanced filters',
    defaultExpanded: false,
  },
};

export const WithHeaderAction: Story = {
  render: (args) => (
    <Box sx={{ maxWidth: 720 }}>
      <CollapsibleSection
        {...args}
        headerAction={
          <Button
            size="small"
            variant="text"
            onClick={(e) => {
              e.stopPropagation();
              fn()();
            }}
          >
            Reset
          </Button>
        }
      >
        <Stack spacing={1}>
          <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
            Header action là một ReactNode, bạn có thể gắn button/icon tuỳ ý.
          </Typography>
          <Typography sx={{ fontSize: 13 }}>Tip: nếu muốn action không toggle, nhớ stopPropagation.</Typography>
        </Stack>
      </CollapsibleSection>
    </Box>
  ),
  args: {
    title: 'Bộ lọc',
    defaultExpanded: true,
  },
};

export const LongContent: Story = {
  render: (args) => (
    <Box sx={{ maxWidth: 720 }}>
      <CollapsibleSection {...args}>
        <Stack spacing={1.5}>
          {Array.from({ length: 10 }).map((_, i) => (
            <Paper key={i} variant="outlined" sx={{ p: 1.5 }}>
              <Typography sx={{ fontWeight: 600 }}>Row {i + 1}</Typography>
              <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
                Nội dung dài để test animation Collapse + spacing trong section.
              </Typography>
            </Paper>
          ))}
        </Stack>
      </CollapsibleSection>
    </Box>
  ),
  parameters: {
    chromatic: { delay: 400 },
  },
};
