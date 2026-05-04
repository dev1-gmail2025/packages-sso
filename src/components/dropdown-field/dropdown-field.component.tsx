import { Avatar, Box, MenuItem, Select, SxProps, Theme, Typography } from '@mui/material';
import { ReactNode, useCallback, useMemo } from 'react';
import { COLOR, STYLE } from '../../common';
import { IconElement } from '../elements';

interface SelectOption {
  label: string;
  value: string | number;
  icon?: string;
  avatar?: string;
  statusIndicator?: boolean;
}

interface SelectFieldProps {
  label?: string;
  placeholder?: string;
  value?: string | number | null;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  errorMessage?: ReactNode;
  successMessage?: ReactNode;
  borderRadius?: number | 'max';
  onChange?: (value: string | number) => void;
  helperText?: string;
  options: SelectOption[];
  checkIconColor?: string;
  required?: boolean;
  sx?: SxProps<Theme>;
  labelSx?: SxProps<Theme>;
}

const DropdownFieldComponent = ({
  label = '',
  placeholder = 'Select option',
  value = null,
  disabled = false,
  error = false,
  success = false,
  errorMessage,
  successMessage,
  borderRadius = 6,
  onChange,
  helperText = '',
  options = [],
  checkIconColor = COLOR.ACCENT[900],
  required = false,
  sx,
  labelSx,
}: SelectFieldProps) => {
  const borderRadiusValue = useMemo(() => {
    return borderRadius === 'max' ? '100px' : `${borderRadius}px`;
  }, [borderRadius]);

  const selectedOption = useMemo(() => options.find(opt => opt.value === value), [options, value]);

  const getHelperText = useCallback(() => {
    if (error && errorMessage) return errorMessage;
    if (success && successMessage) return successMessage;
    if (helperText) return helperText;
    return '';
  }, [error, errorMessage, success, successMessage, helperText]);

  const getHelperTextColor = useCallback(() => {
    if (error) return COLOR.ERROR[500];
    if (success) return COLOR.SUCCESS[500];
    return COLOR.NEUTRAL[400];
  }, [error, success]);

  const getBorderColor = useCallback(() => {
    if (error) return COLOR.ERROR[500];
    if (success) return COLOR.SUCCESS[500];
    return COLOR.NEUTRAL[300];
  }, [error, success]);

  const selectSx = useMemo(
    () => ({
      '& .MuiOutlinedInput-root': {
        borderRadius: `${borderRadiusValue} !important`,
        backgroundColor: disabled ? COLOR.NEUTRAL[100] : 'white',
        transition: 'all 0.2s ease',
        '& fieldset': {
          borderRadius: `${borderRadiusValue} !important`,
          borderColor: getBorderColor(),
        },
        '&:hover fieldset': {
          borderColor: disabled ? getBorderColor() : error ? COLOR.ERROR[500] : COLOR.NEUTRAL[400],
        },
        '&.Mui-focused fieldset': {
          borderColor: error ? COLOR.ERROR[500] : COLOR.NEUTRAL[400],
          borderWidth: '1px',
        },
      },
      '& .MuiOutlinedInput-input': {
        padding: '8px 10px',
        color: COLOR.GRAY[900],
        '&::placeholder': {
          color: COLOR.NEUTRAL[400],
          opacity: 1,
        },
      },
    }),
    [borderRadiusValue, disabled, error, getBorderColor],
  );

  return (
    <Box sx={{ ...sx }}>
      {label && (
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginBottom: '4px' }}>
          <Typography
            sx={{
              ...STYLE.TYPOGRAPHY.textMd,
              color: COLOR.GRAY[800],
              ...labelSx,
            }}
          >
            {label}
          </Typography>
          {required && <Typography sx={{ color: COLOR.ERROR[500], ...STYLE.TYPOGRAPHY.textMd }}>*</Typography>}
        </Box>
      )}

      <Select
        fullWidth
        value={value || ''}
        onChange={e => {
          const selectedValue = e.target.value;
          const matchedOption = options.find(opt => String(opt.value) === String(selectedValue));
          if (matchedOption) {
            onChange?.(matchedOption.value);
          }
        }}
        disabled={disabled}
        displayEmpty
        MenuProps={{
          disableScrollLock: true,
        }}
        slotProps={{
          root: {
            sx: {
              borderRadius: borderRadiusValue,
            },
          },
        }}
        renderValue={() => {
          if (!value) {
            return (
              <Typography sx={{ color: COLOR.NEUTRAL[400], ...STYLE.TYPOGRAPHY.textMd, lineHeight: '1.4375em' }}>
                {placeholder}
              </Typography>
            );
          }

          return (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {selectedOption?.statusIndicator && (
                <Box
                  sx={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#4CAF50',
                  }}
                />
              )}
              {selectedOption?.avatar && (
                <Avatar
                  src={selectedOption.avatar}
                  sx={{
                    width: '24px',
                    height: '24px',
                    fontSize: '12px',
                  }}
                />
              )}
              {selectedOption?.icon && <IconElement icon={selectedOption.icon} />}
              <Typography sx={{ color: COLOR.GRAY[900], ...STYLE.TYPOGRAPHY.textMd, lineHeight: '1.4375em' }}>
                {selectedOption?.label}
              </Typography>
            </Box>
          );
        }}
        sx={selectSx}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
              {option.statusIndicator && (
                <Box
                  sx={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#4CAF50',
                  }}
                />
              )}
              {option.avatar && (
                <Avatar
                  src={option.avatar}
                  sx={{
                    width: '24px',
                    height: '24px',
                    fontSize: '12px',
                  }}
                />
              )}
              {option.icon && <IconElement icon={option.icon} />}
              <Typography sx={{ color: COLOR.GRAY[900], ...STYLE.TYPOGRAPHY.textMd, lineHeight: '1.4375em' }}>
                {option.label}
              </Typography>
              {value === option.value && (
                <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                  <IconElement icon='check' sx={{ color: checkIconColor }} />
                </Box>
              )}
            </Box>
          </MenuItem>
        ))}
      </Select>

      {/* Helper, Error, or Success text */}
      {getHelperText() && (
        <Box
          sx={{
            color: getHelperTextColor(),
            marginTop: '4px',
            ...STYLE.TYPOGRAPHY.textMd,
            lineHeight: '1.4375em',
          }}
        >
          {getHelperText()}
        </Box>
      )}
    </Box>
  );
};

export { DropdownFieldComponent };
