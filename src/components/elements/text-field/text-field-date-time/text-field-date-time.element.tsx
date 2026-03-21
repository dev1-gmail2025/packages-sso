/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, SxProps, Theme, useTheme } from '@mui/material';
import { DateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import React from 'react';
import { getActionBarSx, getPickerSx, getPopperProps } from '../../../styles';
import { IconElement } from '../../icon';
import { TextFieldLabelElement } from '../text-field-label/text-field-label.element';

export interface TextFieldDateTimeElementProps extends DateTimePickerProps {
  name: string;
  label?: string;
  iconLabel?: string;
  icon?: string;
  error?: string | boolean;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
  helperText?: string;
  required?: boolean;
  sx?: SxProps<Theme>;
  disablePast?: boolean;
  disableFuture?: boolean;
  dateRangeInDays?: number;
  onBlur?: (e: React.FocusEvent<any>) => void;
  minDate?: any;
  maxDate?: any;
}

export const TextFieldDateTimeElement: React.FC<TextFieldDateTimeElementProps> = ({
  name,
  label = '',
  iconLabel = 'edit_calendar',
  icon = 'calendar_today',
  error = '',
  value = null,
  helperText,
  onChange,
  sx = {},
  required = false,
  disablePast = false,
  disableFuture = false,
  dateRangeInDays = undefined,
  onBlur,
  format = 'DD/MM/YYYY HH:mm',
  ...rest
}) => {
  const { palette } = useTheme();

  if (disablePast) rest.minDate = dayjs();
  if (disableFuture) rest.maxDate = dayjs();
  if (dateRangeInDays) rest.maxDate = dayjs().add(dateRangeInDays, 'day');

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <TextFieldLabelElement label={label} iconLabel={iconLabel} required={required} />
      <DateTimePicker
        key={value ? dayjs(value).format('YYYY-MM-DD') : 'empty'}
        defaultValue={value ? dayjs(value) : null}
        onAccept={newVal => onChange?.({ target: { name, value: newVal } })}
        format={format}
        name={name}
        {...rest}
        slots={{ openPickerIcon: () => <IconElement icon={icon} /> }}
        slotProps={{
          textField: ({ inputProps, ...rest }: any) => ({
            ...rest,
            ...inputProps,
            error: Boolean(error),
            helperText: (helperText as any) || error,
            fullWidth: true,
            onBlur,
            required,
          }),
          popper: getPopperProps() as any,
          actionBar: { sx: getActionBarSx(palette) },
        }}
        sx={getPickerSx(palette, sx)}
        {...rest}
        minDate={rest.minDate}
        maxDate={rest.maxDate}
      />
    </Box>
  );
};
