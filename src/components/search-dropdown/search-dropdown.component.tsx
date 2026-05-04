import { Autocomplete, Box, Chip, InputAdornment, Typography, styled, TextField, SxProps, Theme } from '@mui/material';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { COLOR, STYLE } from '../../common';
import { IconElement } from '../elements';
interface SearchDropdownOption {
  label: string;
  value: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface SearchDropdownProps {
  borderRadius?: number | 'max';
  placeholder?: string;
  value?: (string | number | SearchDropdownOption)[] | string | number | SearchDropdownOption | null;
  onClear?: () => void;
  onChange?: (value: SearchDropdownOption | SearchDropdownOption[] | null) => void;
  onInputChange?: (inputValue: string) => void;
  onSearch?: (searchText: string) => Promise<SearchDropdownOption[]>;
  disabled?: boolean;
  multiple?: boolean;
  limitTags?: number; // for multiple mode
  label?: string;
  error?: boolean;
  errorMessage?: ReactNode;
  success?: boolean;
  successMessage?: ReactNode;
  helperText?: string;
  options?: SearchDropdownOption[];
  loading?: boolean;
  iconBefore?: ReactNode;
  required?: boolean;
  sx?: SxProps<Theme>;
}

const StyledAutocomplete = styled(Autocomplete)(() => ({
  '& .MuiOutlinedInput-root': {
    padding: '4px 10px !important',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    // minHeight: '44px',

    '& fieldset': {
      borderColor: COLOR.NEUTRAL[300],
    },

    '&:hover fieldset': {
      borderColor: COLOR.NEUTRAL[400],
    },

    '&.Mui-focused fieldset': {
      borderColor: COLOR.NEUTRAL[300] + ' !important',
      borderWidth: '1.5px',
    },

    '&.Mui-disabled': {
      backgroundColor: COLOR.NEUTRAL[100],

      '& fieldset': {
        borderColor: COLOR.NEUTRAL[200],
      },
    },

    '&.Mui-error fieldset': {
      borderColor: COLOR.ERROR[500],
    },

    '&.Mui-success fieldset': {
      borderColor: COLOR.SUCCESS[500],
    },
  },

  '& .MuiInputBase-input': {
    padding: '4px 4px !important',
    fontSize: '14px',
    flex: 1,
    minWidth: '60px',

    '&::placeholder': {
      color: COLOR.NEUTRAL[400],
      opacity: 1,
    },

    '&.Mui-disabled': {
      color: COLOR.NEUTRAL[400],
      WebkitTextFillColor: COLOR.NEUTRAL[400],
    },
  },

  '& .MuiAutocomplete-endAdornment': {
    paddingRight: '4px',
  },

  '& .MuiAutocomplete-tag': {
    backgroundColor: COLOR.ACCENT[50],
    border: `1px solid ${COLOR.ACCENT[200]}`,
    color: COLOR.ACCENT[900],
    fontSize: '12px',
    margin: '2px',

    '& .MuiChip-deleteIcon': {
      color: COLOR.ACCENT[400],

      '&:hover': {
        color: COLOR.ACCENT[600],
      },
    },
  },

  '& .search-dropdown-limit-badge': {
    backgroundColor: COLOR.ACCENT[50],
    border: `1px solid ${COLOR.ACCENT[200]}`,
    color: COLOR.ACCENT[700],
    ...STYLE.TYPOGRAPHY.textSmall.semiBold,
    margin: '2px',
  },
}));

export const SearchDropdownComponent = ({
  value,
  onChange,
  onClear,
  onInputChange,
  onSearch,
  borderRadius = 4,
  disabled = false,
  multiple = false,
  limitTags = 2, // for multiple mode
  label = '',
  placeholder = 'Search...',
  error = false,
  errorMessage,
  success = false,
  successMessage,
  helperText = '',
  options = [],
  loading = false,
  iconBefore,
  required = false,
  sx,
}: SearchDropdownProps) => {
  const DEBOUNCE_DELAY = 500;
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<SearchDropdownOption[]>(options);
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const onSearchRef = useRef(onSearch);
  const onInputChangeRef = useRef(onInputChange);
  const optionsRef = useRef(options);

  // Update refs when props change
  useEffect(() => {
    onSearchRef.current = onSearch;
    onInputChangeRef.current = onInputChange;
    optionsRef.current = options;
  }, [onSearch, onInputChange, options]);

  // Normalize value to array for internal state
  const selectedValues = useMemo(() => {
    if (!value) return [];
    const values = Array.isArray(value) ? value : [value];
    return values.map(v => (typeof v === 'object' ? v : { label: String(v), value: v }));
  }, [value]);

  // Search logic with debounce
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Reset to original options when input is empty
    if (!inputValue.trim()) {
      setFilteredOptions(optionsRef.current);
      return;
    }

    debounceTimerRef.current = setTimeout(async () => {
      const searchFn = onSearchRef.current;

      if (searchFn) {
        // Async search
        setIsLoading(true);
        try {
          const results = await searchFn(inputValue);
          setFilteredOptions(results);
        } catch (error) {
          console.error('Search error:', error);
          setFilteredOptions([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        // Local filtering
        const filtered = optionsRef.current.filter(opt => opt.label.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredOptions(filtered);
      }

      onInputChangeRef.current?.(inputValue);
    }, DEBOUNCE_DELAY);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [inputValue]);

  const handleInputChange = (event: React.SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    if (multiple) {
      const result = Array.isArray(newValue) ? newValue : newValue ? [newValue] : [];
      onChange?.(result.length > 0 ? result : null);
      setInputValue(''); // Clear input after selection in multiple mode
    } else {
      onChange?.(newValue || null);
    }
  };

  const handleClear = () => {
    setInputValue('');
    setFilteredOptions(optionsRef.current);
    onChange?.(null);
    onClear?.();
  };

  return (
    <Box sx={{ width: '100%', ...sx }}>
      {label && (
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginBottom: '6px' }}>
          <Typography
            sx={{
              ...STYLE.TYPOGRAPHY.textMd,
              color: COLOR.GRAY[900],
              display: 'block',
            }}
          >
            {label}
          </Typography>
          {required && <Typography sx={{ color: COLOR.ERROR[500], ...STYLE.TYPOGRAPHY.textMd }}>*</Typography>}
        </Box>
      )}

      <StyledAutocomplete
        multiple={multiple}
        freeSolo={false}
        options={filteredOptions}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getOptionLabel={(option: any) => {
          if (!option) return '';
          if (typeof option === 'object' && 'label' in option) return option.label;
          return String(option);
        }}
        isOptionEqualToValue={(option, val) => {
          if (!option || !val) return false;
          if (typeof option === 'object' && typeof val === 'object' && 'value' in option && 'value' in val) {
            return option.value === val.value;
          }
          return false;
        }}
        value={multiple ? selectedValues : selectedValues[0] || null}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onChange={handleChange}
        disabled={disabled || loading}
        loading={isLoading || loading}
        noOptionsText={inputValue ? 'No results found' : 'Type to search'}
        slotProps={{
          paper: {
            sx: {
              '& .MuiAutocomplete-listbox': {
                borderRadius: borderRadius === 'max' ? '0 0 100px 100px' : `0 0 ${borderRadius}px ${borderRadius}px`,
              },
            },
          },
        }}
        renderInput={params => (
          <TextField
            {...params}
            placeholder={selectedValues && selectedValues?.length > 0 ? '' : placeholder}
            variant='outlined'
            size='small'
            error={error}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: borderRadius === 'max' ? '100px !important' : `${borderRadius}px !important`,
                '& fieldset': {
                  borderRadius: borderRadius === 'max' ? '100px !important' : `${borderRadius}px !important`,
                },
              },
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <InputAdornment position='start' sx={{ marginLeft: '4px', marginRight: '0px' }}>
                    {iconBefore || <IconElement icon={'search'} sx={{ color: '#999', fontSize: '18px' }} />}
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </>
              ),
            }}
          />
        )}
        renderTags={(tagValues, getTagProps) => {
          const all = Array.isArray(tagValues) ? tagValues : [];
          const visible = multiple ? all.slice(0, limitTags) : all;
          const hiddenCount = all.length - visible.length;
          return (
            <>
              {visible.map((option, index) => {
                const chipLabel =
                  typeof option === 'object' && option && 'label' in option ? option.label : String(option);
                return <Chip {...getTagProps({ index })} key={index} label={chipLabel as string} size='small' />;
              })}
              {hiddenCount > 0 && (
                <Chip className='search-dropdown-limit-badge' label={`+${hiddenCount}`} size='small' />
              )}
            </>
          );
        }}
        renderOption={(props, option) => {
          const { key, ...otherProps } = props;
          const label = (option as SearchDropdownOption)?.label || '';
          return (
            <Box key={key} {...otherProps} component='li'>
              {label}
            </Box>
          );
        }}
        componentsProps={{
          clearIndicator: {
            onClick: handleClear,
          },
        }}
      />

      {error && errorMessage && (
        <Box
          sx={{
            fontSize: '12px',
            color: COLOR.ERROR[500],
            marginTop: '4px',
          }}
        >
          {errorMessage}
        </Box>
      )}

      {success && successMessage && (
        <Box
          sx={{
            fontSize: '12px',
            color: COLOR.SUCCESS[500],
            marginTop: '4px',
          }}
        >
          {successMessage}
        </Box>
      )}

      {helperText && !error && !success && (
        <Box
          sx={{
            fontSize: '12px',
            color: COLOR.NEUTRAL[500],
            marginTop: '4px',
          }}
        >
          {helperText}
        </Box>
      )}
    </Box>
  );
};
