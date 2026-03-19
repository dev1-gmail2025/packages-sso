import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

interface TextFieldDateRangeElementProps {
  fromDate?: string;
  toDate?: string;
  onFromDateChange?: (date: string) => void;
  onToDateChange?: (date: string) => void;
  onDateRangeChange?: (fromDate: string, toDate: string) => void;
  disabled?: boolean;
  sx?: any;
  placeholder?: string;
  format?: string;
  minDate?: Dayjs;
  maxDate?: Dayjs;
}

// [TTK - 26/09/2025] - Component TextFieldDateRangeElement
export const TextFieldDateRangeElement: React.FC<TextFieldDateRangeElementProps> = ({
  fromDate = '',
  toDate = '',
  onFromDateChange,
  onToDateChange,
  onDateRangeChange,
  disabled = false,
  sx = {},
  placeholder = 'Ngày bắt đầu — Ngày kết thúc',
  format = 'DD/MM/YYYY',
  minDate,
  maxDate,
}) => {
  const theme = useTheme();

  // [TTK - 26/09/2025] - State openFromDate và openToDate
  const [openFromDate, setOpenFromDate] = useState(false);
  const [openToDate, setOpenToDate] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 14px 0 0',
        backgroundColor: 'white',
        border: '1px solid #E0E0E0',
        borderRadius: 2,
        width: 'auto',
        height: 36,
        '&:hover': {
          borderColor: disabled ? '#E0E0E0' : theme.palette.primary.main,
        },
        transition: 'border-color 0.2s ease',
        ...sx,
      }}
    >
      {/* DatePicker 1: Ngày bắt đầu */}
      <DatePicker
        value={fromDate ? dayjs(fromDate) : null}
        onChange={(newDate) => {
          if (newDate) {
            const dateString = newDate.format('YYYY-MM-DD');
            onFromDateChange?.(dateString);
            if (toDate) {
              onDateRangeChange?.(dateString, toDate);
            }
          }
        }}
        // [TTK - 08/10/2025] - Update dateOfWeek format
        // [Fixed 10/10/2025] - Use date.day() instead of day string parameter
        dayOfWeekFormatter={(date: Dayjs) => {
          const dayOfWeek = date.day();
          const daysInVietnamese = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
          return daysInVietnamese[dayOfWeek];
        }}
        format={format}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
        // [TTK - 26/09/2025] - State openFromDate và openToDate
        open={openFromDate}
        onOpen={() => setOpenFromDate(true)}
        onClose={() => setOpenFromDate(false)}
        slotProps={{
          textField: {
            variant: 'standard',
            size: 'small',
            placeholder: 'Từ ngày',
            sx: {
              width: 110, // Chỉnh width
              '& .MuiInputBase-root': {
                backgroundColor: 'transparent',
                border: 'none',
                cursor: disabled ? 'not-allowed' : 'pointer',
                '&:before': {
                  borderBottom: 'none',
                },
                '&:after': {
                  borderBottom: 'none',
                },
                '&:hover:not(.Mui-disabled):before': {
                  borderBottom: 'none',
                },
              },
              '& .MuiInputBase-input': {
                padding: 0,
                fontSize: '14px',
                textAlign: 'center',
                cursor: disabled ? 'not-allowed' : 'pointer',
              },

              // [TTK - 26/09/2025] - Ẩn icon calendar
              '& .MuiInputAdornment-root': {
                display: 'none', // Ẩn icon calendar
              },
            },
            onClick: () => {
              if (!disabled) {
                setOpenFromDate(true);
              }
            },
          },
          popper: {
            sx: { zIndex: 21000 },
          },
        }}
      />

      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.secondary,
          padding: '0 5px 0 0',
          fontWeight: 400,
        }}
      >
        —
      </Typography>

      {/* DatePicker 2: Ngày kết thúc */}
      <DatePicker
        value={toDate ? dayjs(toDate) : null}
        onChange={(newDate) => {
          if (newDate) {
            const dateString = newDate.format('YYYY-MM-DD');
            onToDateChange?.(dateString);
            if (fromDate) {
              onDateRangeChange?.(fromDate, dateString);
            }
          }
        }}
        // [TTK - 08/10/2025] - Update dateOfWeek format
        // [Fixed 10/10/2025] - Use date.day() instead of day string parameter
        dayOfWeekFormatter={(date: Dayjs) => {
          const dayOfWeek = date.day();
          const daysInVietnamese = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
          return daysInVietnamese[dayOfWeek];
        }}
        format={format}
        minDate={fromDate ? dayjs(fromDate) : minDate}
        maxDate={maxDate}
        disabled={disabled}
        // [TTK - 26/09/2025] - State openFromDate và openToDate
        open={openToDate}
        onOpen={() => setOpenToDate(true)}
        onClose={() => setOpenToDate(false)}
        slotProps={{
          textField: {
            variant: 'standard',
            size: 'small',
            placeholder: 'Đến ngày',
            sx: {
              width: 127, // Chỉnh width
              '& .MuiInputBase-root': {
                backgroundColor: 'transparent',
                border: 'none',
                cursor: disabled ? 'not-allowed' : 'pointer',
                '&:before': {
                  borderBottom: 'none',
                },
                '&:after': {
                  borderBottom: 'none',
                },
                '&:hover:not(.Mui-disabled):before': {
                  borderBottom: 'none',
                },
              },
              '& .MuiInputBase-input': {
                padding: 0,
                fontSize: '14px',
                textAlign: 'center',
                cursor: disabled ? 'not-allowed' : 'pointer',
              },
            },

            // [TTK - 26/09/2025] - State openFromDate và openToDate
            onClick: () => {
              if (!disabled) {
                setOpenToDate(true);
              }
            },
          },
          popper: {
            sx: { zIndex: 21000 },
          },
        }}
      />
    </Box>
  );
};
