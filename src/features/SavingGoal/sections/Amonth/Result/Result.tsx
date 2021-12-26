import React from 'react';
import {
  AmountDescription,
  AmountParagraph,
  AmountValue,
  ConfirmSection,
  PaperBase,
  ResultSection,
} from './styled';
import { Box } from '@mui/material';
import { Cta } from 'components';
import NumberFormat from 'react-number-format';
import { months } from 'utils/months';

type Props = {
  amount: string;
  date: Date;
  monthCounter: number;
  monthlyAmount: number;
};

export default function Result({
  amount,
  date,
  monthCounter,
  monthlyAmount,
}: Props): React.ReactElement {
  return (
    <ResultSection>
      <PaperBase elevation={0}>
        <Box>
          <AmountParagraph>Monthly amount</AmountParagraph>
          <AmountValue role="amountValue">
            <NumberFormat
              value={monthlyAmount}
              displayType={'text'}
              thousandsGroupStyle="thousand"
              decimalSeparator="."
              decimalScale={2}
              type="text"
              thousandSeparator={true}
              allowNegative={false}
              prefix={'$'}
            />
          </AmountValue>
        </Box>
        <AmountDescription role="amountDescription">
          You‘re planning <b>{monthCounter + 1} monthly deposits</b> to reach
          your
          <b> {amount}</b> goal by{' '}
          <b>
            {months[date.getMonth()]} {date.getFullYear()}
          </b>
          .
        </AmountDescription>
      </PaperBase>
      <ConfirmSection>
        <Cta>Confirm</Cta>
      </ConfirmSection>
    </ResultSection>
  );
}
