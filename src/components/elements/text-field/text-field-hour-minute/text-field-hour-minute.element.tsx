import { BaseTextFieldProps, Box, TextField, TextFieldProps, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { StackRowAlignCenter } from '../../../styles';
import { IconButtonElement } from '../../icon';
import { TextFieldLabelElement } from '../text-field-label/text-field-label.element';

export interface TextFieldHourMinuteElementProps extends BaseTextFieldProps {
  iconLabel?: string;
  error?: any;
  placeholder?: string;
  value?: string;
  onChange?: (event: { target: { name?: string; value: string } }) => void;
  showResetButton?: boolean;
  onReset?: () => void;
  InputProps?: TextFieldProps['InputProps'];
}

export const TextFieldHourMinuteElement: React.FC<TextFieldHourMinuteElementProps> = ({
  name,
  label,
  iconLabel = '',
  error = '',
  placeholder,
  value = '',
  helperText,
  onChange,
  sx = {},
  InputProps,
  showResetButton = false,
  onReset,
  ...rest
}) => {
  // Parse value từ format "a:b" thành 2 phần riêng
  const parseValue = (val: string) => {
    if (!val) return { hour: '', minute: '' };
    const parts = val.split(':');
    return {
      hour: parts[0] || '',
      minute: parts[1] || '',
    };
  };

  const [hourValue, setHourValue] = useState(parseValue(value).hour);
  const [minuteValue, setMinuteValue] = useState(parseValue(value).minute);
  const [validationError, setValidationError] = useState<string>('');

  useEffect(() => {
    const parsed = parseValue(value);
    setHourValue(parsed.hour);
    setMinuteValue(parsed.minute);
  }, [value]);

  const validate = (hour: string, minute: string, isBlur: boolean = false): string => {
    // Validate giờ (a) - số nguyên dương
    if (hour && hour.length > 0) {
      const hourNum = parseInt(hour, 10);
      if (isNaN(hourNum) || hourNum < 0) {
        return 'Giờ phải là số nguyên dương';
      }
    } else if (isBlur && minute) {
      return 'Vui lòng nhập giờ';
    }

    // Validate phút (b) - từ 0 đến 59
    if (minute && minute.length > 0) {
      const minuteNum = parseInt(minute, 10);
      if (isNaN(minuteNum)) {
        return 'Phút phải là số';
      }
      if (minuteNum < 0 || minuteNum > 59) {
        return 'Phút phải từ 0 đến 59';
      }
    } else if (isBlur && hour) {
      return 'Vui lòng nhập phút';
    }

    return '';
  };

  const updateValue = (hour: string, minute: string) => {
    const combinedValue = hour || minute ? `${hour}:${minute}` : '';

    // Validate
    const error = validate(hour, minute, false);
    setValidationError(error);

    // Gọi onChange
    if (onChange) {
      onChange({
        target: {
          name,
          value: combinedValue,
        },
      });
    }
  };

  const handleHourChange = (values: any) => {
    // NumericFormat trả về value là string, floatValue là number
    // Khi người dùng xóa hết, value sẽ là '' và floatValue sẽ là undefined
    const newHour = values.value === '' || values.floatValue === undefined ? '' : String(values.floatValue);
    setHourValue(newHour);
    updateValue(newHour, minuteValue);
  };

  const handleMinuteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newMinute = event.target.value.replace(/[^0-9]/g, '');

    // Giới hạn phút không được > 59
    if (newMinute.length === 2) {
      const minuteNum = parseInt(newMinute, 10);
      if (minuteNum > 59) {
        // Chỉ giữ lại chữ số đầu tiên
        newMinute = newMinute[0];
      }
    } else if (newMinute.length > 2) {
      // Nếu có hơn 2 chữ số, chỉ giữ lại 2 chữ số đầu
      const firstTwo = newMinute.substring(0, 2);
      const minuteNum = parseInt(firstTwo, 10);
      if (minuteNum > 59) {
        newMinute = firstTwo[0];
      } else {
        newMinute = firstTwo;
      }
    }

    setMinuteValue(newMinute);
    updateValue(hourValue, newMinute);
  };

  const handleHourBlur = () => {
    const error = validate(hourValue, minuteValue, true);
    setValidationError(error);
  };

  const handleMinuteBlur = () => {
    const error = validate(hourValue, minuteValue, true);
    setValidationError(error);
  };

  const handleReset = () => {
    setHourValue('');
    setMinuteValue('');
    setValidationError('');
    if (onChange) {
      onChange({
        target: {
          name,
          value: '',
        },
      });
    }
    if (onReset) {
      onReset();
    }
  };

  const displayError = error || validationError || helperText;
  const hasError = Boolean(displayError);

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <TextFieldLabelElement label={label} iconLabel={iconLabel} required={rest.required} />
      <StackRowAlignCenter
        gap={0}
        sx={{
          border: hasError ? '2px solid' : '1px solid',
          borderColor: hasError ? 'error.main' : 'rgba(0, 0, 0, 0.23)',
          borderRadius: '6px',
          '&:hover': {
            borderColor: hasError ? 'error.main' : 'rgba(0, 0, 0, 0.87)',
          },
          '&:focus-within': {
            borderColor: hasError ? 'error.main' : 'primary.main',
            borderWidth: '2px',
            ...(hasError ? {} : { borderColor: 'primary.main' }),
          },
          transition: 'border-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
          ...(rest.disabled && {
            backgroundColor: 'action.disabledBackground',
            borderColor: 'rgba(0, 0, 0, 0.06)',
            cursor: 'not-allowed',
          }),
          ...sx,
        }}
      >
        <NumericFormat
          customInput={TextField}
          thousandSeparator=','
          decimalSeparator='.'
          decimalScale={0} // Giữ tối đa decimalScale số sau dấu thập phân
          fixedDecimalScale
          allowNegative={false}
          value={hourValue}
          onValueChange={(values: any) => {
            if (onChange) {
              onChange({ target: { name, value: values.floatValue } });
            }
          }}
          error={Boolean(error)}
          helperText={error || helperText}
          placeholder={'0'}
          sx={{
            // minWidth: '50px',
            '& .MuiOutlinedInput-root': {
              border: 'none',
              width: 'fit-content',
              '& fieldset': {
                border: 'none',
              },
              '&:hover fieldset': {
                border: 'none',
              },
              '&.Mui-focused fieldset': {
                border: 'none',
              },
              '&.Mui-disabled': {
                backgroundColor: 'transparent',
              },
            },
          }}
          {...(rest as any)}
        />
        <Typography
          sx={{
            fontSize: '1.25rem',
            fontWeight: 500,
            color: 'text.secondary',
            mx: 0.5,
            userSelect: 'none',
          }}
        >
          :
        </Typography>
        <TextField
          size='small'
          placeholder='00'
          value={minuteValue}
          onChange={handleMinuteChange}
          onBlur={handleMinuteBlur}
          disabled={rest.disabled}
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            maxLength: 2,
          }}
          InputProps={{
            ...InputProps,
            endAdornment:
              showResetButton && (hourValue || minuteValue) ? (
                <IconButtonElement icon='close' onClick={handleReset} />
              ) : (
                InputProps?.endAdornment
              ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              border: 'none',
              '& fieldset': {
                border: 'none',
              },
              '&:hover fieldset': {
                border: 'none',
              },
              '&.Mui-focused fieldset': {
                border: 'none',
              },
              '&.Mui-disabled': {
                backgroundColor: 'transparent',
              },
            },
          }}
        />
      </StackRowAlignCenter>
      {displayError && (
        <Typography
          variant='caption'
          sx={{
            color: 'error.main',
            mt: 0.5,
            ml: 1.75,
          }}
        >
          {displayError}
        </Typography>
      )}
    </Box>
  );
};
