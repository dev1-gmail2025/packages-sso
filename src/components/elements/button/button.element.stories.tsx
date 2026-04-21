import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { buttonArgTypes } from './button.argtypes';
import { ButtonElement } from './button.element';
import { StackAlignCenter, StackRow } from '../../styles';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { STYLE } from '../../../common';

const meta: Meta<typeof ButtonElement> = {
  title: 'Elements/Button/Button',
  component: ButtonElement,
  tags: ['autodocs'],
  args: {
    content: 'Save changes',
    onClick: fn(),
    variant: 'contained',
    color: 'primary',
  },
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  argTypes: buttonArgTypes,
};

export default meta;
type Story = StoryObj<typeof ButtonElement>;

export const Default: Story = {
  args: {
    content: 'Button',
  },
};

export const GalleryMatrix: Story = {
  render: () => {
    const sizes = ['small', 'medium', 'large'] as const;
    const variants = ['contained', 'outlined', 'text'] as const;
    const colors = ['primary', 'success', 'warning', 'error', 'info'] as const;

    const Row: React.FC<{ label: string; renderBtn: (sz: (typeof sizes)[number]) => React.ReactNode }> = ({
      label,
      renderBtn,
    }) => (
      <StackRow sx={{ display: 'grid', gridTemplateColumns: '160px repeat(3, 1fr)' }}>
        <Typography>{label}</Typography>
        {sizes.map((size) => (
          <StackAlignCenter key={size}>{renderBtn(size)}</StackAlignCenter>
        ))}
      </StackRow>
    );

    const Section: React.FC<{ color: (typeof colors)[number] }> = ({ color }) => (
      <Stack
        sx={{
          display: 'grid',
          gap: STYLE.PADDING_GAP_LAYOUT,
          padding: STYLE.PADDING_GAP_LAYOUT,
          borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL,
        }}
      >
        <Typography>{color}</Typography>
        {variants.map((variant) => (
          <Stack
            key={variant}
            sx={{
              gap: STYLE.PADDING_GAP_ITEM_SMALL,
              border: '1px dashed rgba(0,0,0,0.08)',
              padding: STYLE.PADDING_GAP_ITEM,
              borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL,
              background: 'transparent',
            }}
          >
            <Typography>{variant}</Typography>
            <Row
              label="Enable"
              renderBtn={(size) => (
                <ButtonElement content="Button" size={size} color={color} variant={variant} onClick={fn()} />
              )}
            />
            <Row
              label="With icon"
              renderBtn={(size) => (
                <ButtonElement
                  content="Button"
                  startIcon="add"
                  size={size}
                  color={color}
                  variant={variant}
                  onClick={fn()}
                />
              )}
            />
            <Row
              label="Loading"
              renderBtn={(size) => (
                <ButtonElement content="Loading" loading size={size} color={color} variant={variant} />
              )}
            />
            <Row
              label="Disabled"
              renderBtn={(size) => (
                <ButtonElement content="Disabled" disabled size={size} color={color} variant={variant} />
              )}
            />
          </Stack>
        ))}
      </Stack>
    );

    return (
      <Stack sx={{ display: 'grid', gap: STYLE.PADDING_GAP_LAYOUT }}>
        {colors.map((color) => (
          <Section key={color} color={color} />
        ))}
      </Stack>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <StackRow sx={{ display: 'flex', gap: STYLE.PADDING_GAP_ITEM, flexWrap: 'wrap' }}>
      <ButtonElement {...args} startIcon="add" content="Add item" />
      <ButtonElement {...args} endIcon="arrow_forward" content="Continue" />
      <ButtonElement {...args} startIcon="save" endIcon="check" content="Save & Check" />
    </StackRow>
  ),
};
