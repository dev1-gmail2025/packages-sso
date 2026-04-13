import { Typography } from '@mui/material';
import React from 'react';
import { StackRowAlignCenter, StackRow } from '../../styles';
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
    <StackRowAlignCenter sx={{ height: '32px', gap: '6px' }}>
      {items.map((item, index) => (
        <StackRow key={index}>
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
        </StackRow>
      ))}
    </StackRowAlignCenter>
  );
};
