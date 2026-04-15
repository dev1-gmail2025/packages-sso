import { Box, Typography, useTheme } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { StackRowAlignCenterJustBetween } from '../../../styles';
import { IconElement } from '../../icon';
import { TextFieldLabelElement } from '../text-field-label/text-field-label.element';

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
  label?: string;
  required?: boolean;
}

// Component TextFieldDateRangeElement (reused style from erp-client-fe)
export const TextFieldDateRangeElement: React.FC<TextFieldDateRangeElementProps> = ({
  fromDate = '',
  toDate = '',
  label = 'Ngày',
  onFromDateChange,
  onToDateChange,
  onDateRangeChange,
  disabled = false,
  sx = {},
  placeholder = 'Ngày bắt đầu — Ngày kết thúc',
  format = 'DD/MM/YYYY',
  minDate,
  maxDate,
  required = false,
}) => {
  const theme = useTheme();

  const [openFromDate, setOpenFromDate] = useState(false);
  const [openToDate, setOpenToDate] = useState(false);

  return (
    <Box>
      {label && <TextFieldLabelElement label={label} required={required} />}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 8px 0 0',
          // backgroundColor: 'white',
          border: '1px solid #E0E0E0',
          borderRadius: 2,
          width: '100%',
          height: 36,
          '&:hover': {
            borderColor: disabled ? '#E0E0E0' : theme.palette.primary.main,
          },
          transition: 'border-color 0.2s ease',
          gap: 1,
          ...sx,
        }}
      >
        <StackRowAlignCenterJustBetween sx={{ flex: 1, gap: 1, pl: 1 }}>
          <DatePicker
            value={fromDate ? dayjs(fromDate) : null}
            onChange={newDate => {
              if (newDate && newDate.isValid()) {
                const dateString = newDate.format('YYYY-MM-DD');
                onFromDateChange?.(dateString);
                if (toDate) {
                  onDateRangeChange?.(dateString, toDate);
                }
              } else if (newDate === null) {
                onFromDateChange?.('');
                onDateRangeChange?.('', toDate || '');
              }
            }}
            dayOfWeekFormatter={(date: Dayjs) => {
              const dayOfWeek = date.day();
              const daysInVietnamese = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
              return daysInVietnamese[dayOfWeek];
            }}
            format={format}
            minDate={minDate}
            maxDate={maxDate}
            disabled={disabled}
            open={openFromDate}
            onOpen={() => setOpenFromDate(true)}
            onClose={() => setOpenFromDate(false)}
            slotProps={{
              textField: {
                variant: 'standard',
                size: 'small',
                placeholder: 'Từ ngày',
                InputProps: {
                  disableUnderline: true,
                },
                sx: {
                  // width: 120,
                  '& .MuiInputBase-root': {
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                  },
                  '& .MuiInputBase-input': {
                    padding: 0,
                    fontSize: '14px',
                    textAlign: 'center',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                  },
                  '& .MuiInputAdornment-root': {
                    display: 'none',
                  },
                  '& .MuiPickersInputBase-sectionsContainer': {
                    padding: '0 !important',
                    width: 'auto',
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
            variant='body2'
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 400,
              lineHeight: 1,
            }}
          >
            —
          </Typography>

          <DatePicker
            value={toDate ? dayjs(toDate) : null}
            onChange={newDate => {
              if (newDate && newDate.isValid()) {
                const dateString = newDate.format('YYYY-MM-DD');
                onToDateChange?.(dateString);
                if (fromDate) {
                  onDateRangeChange?.(fromDate, dateString);
                }
              } else if (newDate === null) {
                onToDateChange?.('');
                onDateRangeChange?.(fromDate || '', '');
              }
            }}
            dayOfWeekFormatter={(date: Dayjs) => {
              const dayOfWeek = date.day();
              const daysInVietnamese = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
              return daysInVietnamese[dayOfWeek];
            }}
            format={format}
            minDate={fromDate ? dayjs(fromDate) : minDate}
            maxDate={maxDate}
            disabled={disabled}
            open={openToDate}
            onOpen={() => setOpenToDate(true)}
            onClose={() => setOpenToDate(false)}
            slotProps={{
              textField: {
                variant: 'standard',
                size: 'small',
                placeholder: 'Đến ngày',
                InputProps: {
                  disableUnderline: true,
                },
                sx: {
                  // width: 120,
                  '& .MuiInputBase-root': {
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                  },
                  '& .MuiInputAdornment-root': {
                    display: 'none',
                  },
                  '& .MuiInputBase-input': {
                    padding: 0,
                    fontSize: '14px',
                    textAlign: 'center',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                  },
                  // '& .MuiInputAdornment-root': {
                  //   display: 'none',
                  // },
                  '& .MuiPickersInputBase-sectionsContainer': {
                    padding: '0 !important',
                    justifyContent: 'center',
                    width: 'auto',
                  },
                },
                onClick: () => {
                  if (!disabled) {
                    setOpenToDate(true);
                  }
                },
              },
              popper: {
                sx: { zIndex: 21000 },
              },
              // field: { clearable: true },
            }}
          />
        </StackRowAlignCenterJustBetween>

        <IconElement
          onClick={() => {
            if (!disabled) {
              setOpenFromDate(true);
            }
          }}
          icon='calendar_today'
          sx={{ fontSize: 18 }}
        />
      </Box>
    </Box>
  );
};
