import { Typography } from '@mui/material';
import React from 'react';
import { StackRowAlignCenter } from '../../styles';
import { IconElement } from '../icon';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbElementProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbElement: React.FC<BreadcrumbElementProps> = ({ items }) => {
  return (
    <StackRowAlignCenter sx={{ height: '32px', gap: 1 }}>
      {items.map((item, index) => (
        <StackRowAlignCenter key={index} gap={1}>
          {item.onClick ? (
            <Typography
              onClick={item.onClick}
              sx={index < items.length - 1 ? { color: '#737676', cursor: 'pointer' } : {}}
            >
              {item.label}
            </Typography>
          ) : (
            <Typography>{item.label}</Typography>
          )}
          {index < items.length - 1 && <IconElement icon={'keyboard_arrow_right'} sx={{ color: '#737676' }} />}
        </StackRowAlignCenter>
      ))}
    </StackRowAlignCenter>
  );
};
