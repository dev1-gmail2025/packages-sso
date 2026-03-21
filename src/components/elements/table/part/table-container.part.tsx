import { Box, TableContainer } from '@mui/material';
import React, { ReactElement } from 'react';

export interface TableContainerPartProps {
  children: ReactElement;
}

export const TableContainerPart: React.FC<TableContainerPartProps> = ({ children }) => {
  // const { palette } = useTheme();

  return (
    <Box sx={{ overflowY: 'auto', flex: 1 }}>
      <TableContainer sx={{ maxHeight: '100%', overflow: 'auto' }}>{children}</TableContainer>
    </Box>
  );
};
