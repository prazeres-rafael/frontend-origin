import { Box } from '@mui/material';
import React from 'react';
import { MonthContent, MonthParagraph, YearParagraph } from './styled';
import ArrowLeft from '../../assets/svg/arrow-left.svg';
import ArrowRight from '../../assets/svg/arrow-right.svg';

type Props = {
  date: Date;
  monthByKey: (event: React.KeyboardEvent) => void;
  decrementMonth: () => void;
  incrementMonth: () => void;
  month: string;
};

export default function BasicDatePicker({
  date,
  monthByKey,
  decrementMonth,
  incrementMonth,
  month,
}: Props) {
  return (
    <MonthContent role="monthContent" tabIndex={0} onKeyDown={monthByKey}>
      <button role="buttonDecrement" onClick={decrementMonth}>
        <ArrowLeft />
      </button>
      <Box>
        <MonthParagraph role="paragraphMonth">{month}</MonthParagraph>
        <YearParagraph role="paragraphYear">{date.getFullYear()}</YearParagraph>
      </Box>
      <button role="buttonIncrement" onClick={incrementMonth}>
        <ArrowRight />
      </button>
    </MonthContent>
  );
}
