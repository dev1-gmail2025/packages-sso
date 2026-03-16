import { Typography } from '@mui/material';
import React from 'react';
import { getLimitLineCss } from '../../../common/utils/other.util';
import { getTimeAgo } from '../../../common/utils/time.util';

export interface TimeAgoComponentProps {
  time: Date;
  hasText?: boolean;
}

export const TimeAgoComponent: React.FC<TimeAgoComponentProps> = ({ time, hasText }) => {
  return (
    <Typography variant='caption' sx={{ ...getLimitLineCss(1), color: 'text.disabled' }}>
      {(hasText ? 'Cập nhật lúc ' : '') + getTimeAgo(time)}
    </Typography>
  );
};
