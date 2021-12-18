import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import DollarSign from '../../assets/svg/dollar-sign.svg';
import { CurrencyMask } from './CurrencyMask';

export default function Input() {
  return (
    <TextField
      id="input-with-icon-textfield"
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
