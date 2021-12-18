import styled from 'styled-components';
import { Typography, Paper } from '@mui/material';

export const SavingGoalParagraph = styled(Typography)({
  color: '#1B31A8',
  fontSize: 20,
  fontWeight: 500,
  paddingTop: 48,
  marginBottom: 24,
});

export const Title = styled(Typography)({
  color: '#1E2A32',
  fontSize: 24,
  fontWeight: 500,
});

export const Subtitle = styled(Typography)({
  color: '#708797',
  fontSize: 16,
  fontWeight: 400,
});

export const AmountParagraph = styled(Typography)({
  color: '#1E2A32',
  fontSize: 20,
  fontWeight: 400,
  marginLeft: 32,
});

export const AmountValue = styled(Typography)({
  color: '#0079FF',
  margin: '24px 30.5px 16px',
  fontSize: 32,
  fontWeight: 500,
  textAlign: 'right',
});

export const AmountDescription = styled(Typography)({
  color: '#1C1E1F',
  margin: '24px 32px',
  fontSize: 12,
  fontWeight: 400,
});

export const Paragraph = styled(Typography)({
  color: '#1E2A32',
  fontSize: 14,
  fontWeight: 400,
});

export const Section = styled.section({
  backgroundColor: '#F4F8FA',
  height: '90vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const GoalSection = styled.div({
  display: 'flex',
  flexDirection: 'row',

  '& > div': {
    marginLeft: 16,
  },
});

export const AmountSection = styled.div({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '28px',

  '& > div:last-child': {
    marginLeft: 16,
  },
});

export const ResultSection = styled.div({
  marginTop: '24px',
});

export const PaperBase = styled(Paper)({
  border: '1px solid #E9EEF2',
  borderRadius: 8,
  background: 'linear-gradient(180deg, #FFF 50%, #F4F8FA 50%)',

  '& > div': {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const ConfirmSection = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: '32px',
});
