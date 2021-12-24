import React from 'react';
import Card from '../../components/Card';
import BuyHouse from '../../assets/svg/buy-a-house.svg';
import {
  AmountDescription,
  AmountParagraph,
  AmountSection,
  AmountValue,
  ConfirmSection,
  GoalSection,
  Paragraph,
  PaperBase,
  ResultSection,
  Title,
  SavingGoalParagraph,
  Section,
  Subtitle,
} from './styled';
import { Box, Grid } from '@mui/material';
import Input from '../../components/Input';
import MonthPicker from '../../components/MonthPicker';
import Cta from '../../components/Cta';
import { dateWithMonthsDelay } from './dateWithMonthsDelay';
import { months } from '../../utils/months';
import NumberFormat from 'react-number-format';

export default function SavingGoal(): React.ReactElement {
  const [monthlyAmount, setMonthlyAmount] = React.useState<number>(0);
  const [amount, setAmount] = React.useState<string>('0');

  const updateAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const [monthCounter, setMonthCounter] = React.useState<number>(0);

  React.useEffect(() => {
    setMonthlyAmount(Number(amount.replace(/[,]/, '')) / (monthCounter + 1));
    setDatePicker(dateWithMonthsDelay(monthCounter, setMonthCounter));
  }, [amount, monthCounter]);

  const [date, setDatePicker] = React.useState<Date>(new Date());

  const incrementMonth = () => {
    setMonthCounter(monthCounter + 1);
    updateAmount;
  };

  const decrementMonth = () => {
    setMonthCounter(monthCounter - 1);
    updateAmount;
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
    <Section>
      <SavingGoalParagraph>
        Let‘s plan your <b>saving goal.</b>
      </SavingGoalParagraph>
      <Card>
        <GoalSection>
          <BuyHouse />
          <Box>
            <Title>Buy a house</Title>
            <Subtitle>Saving goal</Subtitle>
          </Box>
        </GoalSection>
        <AmountSection>
          <Grid container spacing={{ lg: 2, md: 2 }}>
            <Grid item lg={7} md={7} xs={12}>
              <Paragraph>Total amount</Paragraph>
              <Input onChange={updateAmount} />
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
        <ResultSection>
          <PaperBase elevation={0}>
            <Box>
              <AmountParagraph>Monthly amount</AmountParagraph>
              <AmountValue>
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
            <AmountDescription>
              You‘re planning <b>{monthCounter + 1} monthly deposits</b> to
              reach your
              <b> {amount}</b> goal by <b>October 2020</b>.
            </AmountDescription>
          </PaperBase>
          <ConfirmSection>
            <Cta>Confirm</Cta>
          </ConfirmSection>
        </ResultSection>
      </Card>
    </Section>
  );
}
