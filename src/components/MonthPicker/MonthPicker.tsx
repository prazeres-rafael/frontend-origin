import { Box } from '@mui/material';
import React from 'react';
import { MonthContent, MonthParagraph, YearParagraph } from './styled';
import ArrowLeft from '../../assets/svg/arrow-left.svg';
import ArrowRight from '../../assets/svg/arrow-right.svg';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function BasicDatePicker() {
  const [monthCounter, setMonthCounter] = React.useState<number>(0);
  const [date, setDatePicker] = React.useState<Date>(new Date());

  React.useEffect(() => {
    setDatePicker(dateWithMonthsDelay(monthCounter));
  }, [monthCounter]);

  function dateWithMonthsDelay(months: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + months);

    if (date < new Date()) {
      setMonthCounter(0);
      return new Date();
    } else {
      return date;
    }
  }

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
    <MonthContent role="monthContent" tabIndex={0} onKeyDown={monthByKey}>
      <button role="buttonDecrement" onClick={decrementMonth}>
        <ArrowLeft />
      </button>
      <Box>
        <MonthParagraph role="paragraphMonth">
          {months[date.getMonth()]}
        </MonthParagraph>
        <YearParagraph role="paragraphYear">{date.getFullYear()}</YearParagraph>
      </Box>
      <button role="buttonIncrement" onClick={incrementMonth}>
        <ArrowRight />
      </button>
    </MonthContent>
  );
}
