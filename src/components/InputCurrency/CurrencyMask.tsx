/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Ref } from 'react';
import NumberFormat from 'react-number-format';

const CurrencyMaskBase = (
  props: { [x: string]: unknown },
  ref: Ref<HTMLInputElement>
) => {
  const { ...other } = props;

  return (
    <NumberFormat
      {...other}
      thousandsGroupStyle="thousand"
      decimalSeparator="."
      decimalScale={2}
      displayType="input"
      type="text"
      thousandSeparator={true}
      allowNegative={false}
    />
  );
};

export const CurrencyMask = React.forwardRef(CurrencyMaskBase);
