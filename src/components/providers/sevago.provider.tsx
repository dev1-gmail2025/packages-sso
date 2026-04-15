import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export interface SevagoProviderProps {
  children: React.ReactNode;
}

export function SevagoProvider ({ children }: SevagoProviderProps) {
  return <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>;
}
