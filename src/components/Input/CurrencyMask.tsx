import NumberFormat from 'react-number-format';

export const CurrencyMask = (props: { [x: string]: unknown }) => {
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
