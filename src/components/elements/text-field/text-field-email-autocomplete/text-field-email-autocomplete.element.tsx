import { Box, Chip, SxProps } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import React, { useState } from 'react';
import { PaperSelect } from '../../../styles/paper.style';
import { IconElement } from '../../icon';
import { TextFieldLabelElement } from '../text-field-label/text-field-label.element';

interface TextFieldEmailAutocompleteProps extends Omit<TextFieldProps, ''> {
  name: string;
  label?: string;
  iconLabel?: string;
  error?: any;
  value?: string[];
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
  onRemove?: () => void; // để hỗ trợ nút ẩn Cc/Bcc
  showRemove?: boolean;
  sxInput?: SxProps;
}

export const TextFieldEmailAutocomplete: React.FC<TextFieldEmailAutocompleteProps> = ({
  name,
  label,
  iconLabel = 'alternate_email',
  error = '',
  placeholder = 'Nhập email...',
  value = [],
  disabled = false,
  fullWidth = true,
  helperText,
  onChange,
  sx = {},
  sxInput = {},
  ...restInput
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (_: any, newValue: string[]) => {
    onChange?.({ target: { name, value: newValue } });
  };

  const commitInputAsTag = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !value.includes(trimmed)) {
      const newValues = [...value, trimmed];
      handleChange(null, newValues);
      setInputValue('');
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <TextFieldLabelElement label={label} iconLabel={iconLabel} required={restInput.required} />
      <Autocomplete
        multiple
        freeSolo
        options={[]} // không gợi ý danh sách, chỉ nhập tự do
        value={value}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
        onChange={handleChange}
        onKeyDown={e => {
          if ((e.key === 'Enter' || e.key === 'Tab') && inputValue.trim()) {
            e.preventDefault();
            commitInputAsTag();
          }
        }}
        onBlur={() => {
          commitInputAsTag();
        }}
        disableCloseOnSelect
        fullWidth={fullWidth}
        clearIcon={<IconElement icon='close_small' />}
        popupIcon={<IconElement icon='arrow_drop_down' />}
        disabled={disabled}
        open={false} // không mở dropdown
        renderTags={(tagValue: string[], getTagProps) =>
          tagValue.map((option: string, index: number) => (
            <Chip
              variant='outlined'
              label={option}
              {...getTagProps({ index })}
              sx={{ bgcolor: 'grey.100', height: 32, fontSize: 14 }}
            />
          ))
        }
        renderInput={params => (
          <TextField
            {...params}
            name={name}
            placeholder={placeholder}
            error={Boolean(error)}
            helperText={error || helperText}
            variant='outlined'
            sx={{ minHeight: 56, ...sxInput }}
            {...restInput}
          />
        )}
        PaperComponent={({ children }) =>
          Array.isArray(children) && children.length > 0 ? <PaperSelect>{children}</PaperSelect> : null
        }
        sx={{
          ...sx,
          '.MuiAutocomplete-inputRoot': {
            paddingTop: '8px',
            paddingBottom: '8px',
          },
        }}
      />
    </Box>
  );
};
