import { Collapse, Stack, SxProps, Theme, Typography } from '@mui/material';
import { forwardRef, ReactNode, useState } from 'react';
import { COLOR, STYLE } from '../../../common';
import { StackRowAlignCenter, StackRowAlignCenterJustBetween } from '../../styles';
import { IconElement } from '../icon';

export interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
  sx?: SxProps<Theme>;
  titleSx?: SxProps<Theme>;
  headerAction?: ReactNode;
}

export const CollapsibleSection = forwardRef<HTMLDivElement, CollapsibleSectionProps>(
  ({ title, children, defaultExpanded = true, sx, titleSx, headerAction }, ref) => {
    const [expanded, setExpanded] = useState(defaultExpanded);

    const handleToggle = () => {
      setExpanded(!expanded);
    };

    return (
      <Stack
        ref={ref}
        sx={{
          backgroundColor: 'white',
          borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL,
          border: `1px solid ${COLOR.COMMON.gray2}`,
          overflow: 'hidden',
          gap: 0,
          ...sx,
        }}
      >
        <StackRowAlignCenterJustBetween sx={{ p: STYLE.PADDING_GAP_LAYOUT, cursor: 'pointer' }}>
          <Typography
            sx={{ ...STYLE.TYPOGRAPHY.textMd.semiBold, color: COLOR.COMMON.black, ...titleSx }}
            onClick={handleToggle}
          >
            {title}
          </Typography>
          <StackRowAlignCenter gap={0}>
            {headerAction}
            <IconElement
              icon={expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
              sx={{ transition: 'transform 0.2s' }}
              onClick={handleToggle}
            />
          </StackRowAlignCenter>
        </StackRowAlignCenterJustBetween>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <Stack sx={{ p: STYLE.PADDING_GAP_LAYOUT, gap: STYLE.PADDING_GAP_BUTTON }}>{children}</Stack>
        </Collapse>
      </Stack>
    );
  },
);
