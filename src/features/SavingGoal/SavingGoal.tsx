import React from 'react';
import { Card } from 'components';
import BuyHouse from 'assets/svg/buy-a-house.svg';
import {
  GoalSection,
  Title,
  SavingGoalParagraph,
  Section,
  Subtitle,
} from './styled';
import { Box } from '@mui/material';
import { Amonth } from './sections';

export default function SavingGoal(): React.ReactElement {
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
        <Amonth />
      </Card>
    </Section>
  );
}
