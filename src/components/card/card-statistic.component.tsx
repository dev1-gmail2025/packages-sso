import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, IconButton, Stack, Typography } from '@mui/material';
import { IconElement } from '../elements';
import { STYLE } from '../../common';
import { StackRowAlignCenterJustBetween, StackRowAlignJustCenter } from '../styles';
import { lightenColor } from '../../common/utils/other.util';

interface CardStatisticsComponentProps {
  label: string;
  count: number;
  color: string;
  bgColor: string;
  icon: string;
  info?: ReactNode;
}

export const CardStatisticsComponent: React.FC<CardStatisticsComponentProps> = ({
  label,
  count = 0,
  color,
  icon,
  info,
  bgColor,
}) => {
  return (
    <Card sx={{ minHeight: 116, borderRadius: STYLE.BORDER_RADIUS_ELEMENT_WRAPPER }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <IconElement icon="more_vert" />
          </IconButton>
        }
        title={
          <Typography variant="h6" sx={{ fontSize: '16px' }} color="#737373">
            {label}
          </Typography>
        }
      />

      <CardContent sx={{ paddingTop: 0 }}>
        <Stack gap={0.5}>
          <StackRowAlignCenterJustBetween width="100%">
            <Typography variant="h2" sx={{ color, fontSize: '32px' }}>
              {count}
            </Typography>
            <StackRowAlignJustCenter
              sx={{
                bgcolor: lightenColor(bgColor, 0.85),
                borderRadius: STYLE.BORDER_RADIUS_ELEMENT_WRAPPER,
                width: 48,
                height: 48,
              }}
            >
              <img src={icon} />
            </StackRowAlignJustCenter>
          </StackRowAlignCenterJustBetween>
          {info}
        </Stack>
      </CardContent>
    </Card>
  );
};
