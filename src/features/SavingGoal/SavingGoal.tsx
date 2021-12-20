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

export default function Header(): React.ReactElement {
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
              <Input />
            </Grid>
            <Grid item lg={5} md={5} xs={12}>
              <Paragraph>Reach goal by</Paragraph>
              <MonthPicker />
            </Grid>
          </Grid>
        </AmountSection>
        <ResultSection>
          <PaperBase elevation={0}>
            <Box>
              <AmountParagraph>Monthly amount</AmountParagraph>
              <AmountValue>$520.83</AmountValue>
            </Box>
            <AmountDescription>
              You‘re planning <b>48 monthly deposits</b> to reach your
              <b> $25,000</b> goal by <b>October 2020</b>.
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
