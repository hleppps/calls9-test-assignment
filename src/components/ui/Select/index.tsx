import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material';
import { FC } from 'react';

import { SelectOption } from './types';

export interface SelectProps extends MuiSelectProps {
  options: SelectOption[];
}

export const Select: FC<SelectProps> = ({ options, ...rest }) => {
  const { label } = rest;
  return (
    <FormControl>
      {label && <InputLabel id="select">{label}</InputLabel>}
      <MuiSelect {...rest}>
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
