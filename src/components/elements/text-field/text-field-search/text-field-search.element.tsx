import { BaseTextFieldProps, Box, debounce, TextField } from '@mui/material';
import React from 'react';
import { COLOR, STYLE } from '../../../../common';
import { IconElement } from '../../icon';
import { TextFieldLabelElement } from '../text-field-label/text-field-label.element';

export interface TextFieldSearchElementProps extends BaseTextFieldProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
  label?: string;
  iconLabel?: string;
  searchIcon?: string;
  // value?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

export const TextFieldSearchElement: React.FC<TextFieldSearchElementProps> = ({
  placeholder = 'Tìm kiếm...',
  rows,
  onChange,
  // value = '',
  label = '',
  iconLabel = '',
  searchIcon,
  inputRef,
  sx = {},
  ...rest
}) => {
  const change = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange({
        target: {
          name: 'search',
          value: event.target.value === '' ? null : event.target.value,
        },
      });
    }
  }, 500);

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <TextFieldLabelElement label={label} iconLabel={iconLabel} required={rest.required} />
      <TextField
        {...rest}
        // value={value}
        placeholder={placeholder}
        onChange={change}
        name="search"
        inputRef={inputRef}
        {...(rows && { rows, multiline: true })}
        {...(searchIcon && {
          InputProps: {
            startAdornment: <IconElement icon={searchIcon} />,
          },
        })}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: COLOR.COMMON.white,
            borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
          },

          ...sx,
        }}
      />
    </Box>
  );
};
