import React from 'react';
import { AmountSection, Paragraph } from './styled';
import { Grid } from '@mui/material';
import { InputCurrency, MonthPicker } from 'components';
import { months } from 'utils/months';
import { dateWithMonthsDelay } from './dateWithMonthsDelay';
import Result from './Result';

export default function AmonthSection(): React.ReactElement {
  const [monthlyAmount, setMonthlyAmount] = React.useState<number>(0);
  const [amount, setAmount] = React.useState<string>('0');
  const [monthCounter, setMonthCounter] = React.useState<number>(0);
  const [date, setDatePicker] = React.useState<Date>(new Date());

  const updateAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  React.useEffect(() => {
    setMonthlyAmount(Number(amount.replace(/[,]/g, '')) / (monthCounter + 1));
    setDatePicker(dateWithMonthsDelay(monthCounter, setMonthCounter));
  }, [amount, monthCounter]);

  const incrementMonth = () => {
    setMonthCounter(monthCounter + 1);
  };

  const decrementMonth = () => {
    setMonthCounter(monthCounter - 1);
  };

  const monthByKey = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Left': // IE/Edge specific value
      case 'ArrowLeft':
        setMonthCounter(monthCounter - 1);
        break;
      case 'Right': // IE/Edge specific value
      case 'ArrowRight':
        setMonthCounter(monthCounter + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <AmountSection>
        <Grid container spacing={{ lg: 2, md: 2 }}>
          <Grid item lg={7} md={7} xs={12}>
            <Paragraph>Total amount</Paragraph>
            <InputCurrency onChange={updateAmount} />
          </Grid>
          <Grid item lg={5} md={5} xs={12}>
            <Paragraph>Reach goal by</Paragraph>
            <MonthPicker
              monthByKey={monthByKey}
              incrementMonth={incrementMonth}
              decrementMonth={decrementMonth}
              date={date}
              month={months[date.getMonth()]}
            />
          </Grid>
        </Grid>
      </AmountSection>
      <Result
        amount={amount}
        date={date}
        monthCounter={monthCounter}
        monthlyAmount={monthlyAmount}
      />
    </>
  );
}
