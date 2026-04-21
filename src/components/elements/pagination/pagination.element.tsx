import { FormControl, Pagination, SelectChangeEvent, SxProps, Theme, useTheme } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../common';
import { StackRowAlignCenter } from '../../styles';
import { TextFieldSelectElement } from '../text-field/text-field-select/text-field-select.element';

export interface PaginationElementProps {
  total?: number;
  page: number;
  take: number;
  openRowsPerPage?: boolean;
  onChange: (pagination: { page: number; take: number }) => void;
  sx?: SxProps<Theme>;
}

export const PaginationElement: React.FC<PaginationElementProps> = ({
  total = 0,
  page,
  take = 10,
  openRowsPerPage = true,
  onChange,
  sx = {},
}) => {
  const totalPages = Math.ceil(total / take);
  const validTakes = [5, 10, 25, 50];
  const displayTake = validTakes.includes(Number(take)) ? Number(take) : 10;
  const { palette } = useTheme();

  const handleChangeRowsPerPage = (event: SelectChangeEvent<number>) => {
    const newTake = Number(event.target.value);
    onChange({ page: 1, take: newTake });
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    onChange({ page: newPage, take });
  };

  return (
    <StackRowAlignCenter gap={0.5} sx={{ ml: 'auto', ...sx }}>
      <Pagination
        count={totalPages}
        page={page}
        showFirstButton
        showLastButton
        onChange={handlePageChange}
        size="medium"
        variant="outlined"
        shape="rounded"
        sx={{
          '& .MuiPagination-ul': {
            gap: 0.5,
          },
          '& .MuiPaginationItem-root': {
            borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL,
            m: 0,
          },
          '& .MuiPaginationItem-root.Mui-disabled': {
            opacity: 0.5,
            pointerEvents: 'none',
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            background: palette.primary.main,
            color: 'white',
          },
        }}
      />
      {openRowsPerPage && (
        <StackRowAlignCenter>
          <FormControl size="small">
            <TextFieldSelectElement
              value={displayTake}
              onChange={(event) => handleChangeRowsPerPage(event as any)}
              options={validTakes.map((take) => ({ value: take, label: `${take} / trang` }))}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '0px !important',
                },
              }}
            />
          </FormControl>
        </StackRowAlignCenter>
      )}
    </StackRowAlignCenter>
  );
};
