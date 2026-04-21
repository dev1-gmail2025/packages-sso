import { Box, SxProps, Theme, useTheme } from '@mui/material';
import { TimePicker, TimePickerProps } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import React from 'react';
import { getPopperProps, getActionBarSx, getPickerSx } from '../../../styles';
import { IconElement } from '../../icon';
import { TextFieldLabelElement } from '../text-field-label/text-field-label.element';

export interface TextFieldTimeElementProps extends TimePickerProps {
  name: string;
  label?: string;
  iconLabel?: string;
  error?: any;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
  helperText?: string;
  required?: boolean;
  sx?: SxProps<Theme>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement> | any) => void;
}

export const TextFieldTimeElement: React.FC<TextFieldTimeElementProps> = ({
  name,
  label = 'Thời gian',
  iconLabel = 'schedule',
  error = '',
  value = null,
  helperText,
  onChange,
  sx = {},
  required = false,
  onBlur,
  format = 'HH:mm',
  ...rest
}) => {
  const { palette } = useTheme();

  const onAccept = (value: any, context: any) => {
    const newValue = value ? dayjs(value) : null;
    if (onChange) {
      onChange({ target: { name, value: newValue } });
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <TextFieldLabelElement label={label} iconLabel={iconLabel} required={required} />
      <TimePicker
        value={value ? dayjs(value) : null}
        onAccept={onAccept}
        format={format}
        name={name}
        {...rest}
        slots={{ openPickerIcon: () => <IconElement icon="schedule" /> }}
        slotProps={{
          textField: {
            fullWidth: true,
            onBlur,
            error: Boolean(error),
            helperText,
            required,
          },
          popper: getPopperProps() as any,
          actionBar: { sx: getActionBarSx(palette) },
        }}
        sx={getPickerSx(palette, sx)}
      />
    </Box>
  );
};
