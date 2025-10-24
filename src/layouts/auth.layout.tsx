import React, { ReactNode } from 'react';
import { Stack } from '@mui/material';

export interface AuthLayoutProps {
  children?: ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Stack
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(/images/login.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Stack sx={{ flex: 1 }}>{children}</Stack>
    </Stack>
  );
};
