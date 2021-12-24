import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import DollarSign from '../../assets/svg/dollar-sign.svg';
import { CurrencyMask } from './CurrencyMask';

type Props = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ onChange }: Props) {
  return (
    <TextField
      id="input-with-icon-textfield"
      fullWidth
      onChange={onChange}
      InputProps={{
        inputMode: 'numeric',
        inputComponent: CurrencyMask,
        startAdornment: (
          <InputAdornment position="start">
            <DollarSign />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    ></TextField>
  );
}
