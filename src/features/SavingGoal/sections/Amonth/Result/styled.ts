import styled from 'styled-components';
import { Paper } from '@mui/material';
import { palette } from 'utils/palette';

export const SavingGoalParagraph = styled.p({
  color: palette.brand.primary,
  fontSize: 20,
  fontWeight: 500,
  paddingTop: 48,
  marginBottom: 24,
});

export const Title = styled.p({
  color: palette.paragraph.primary,
  fontSize: 24,
  fontWeight: 800,
  margin: 0,
});

export const Subtitle = styled.p({
  color: palette.paragraph.secundary,
  fontSize: 16,
  fontWeight: 400,
  margin: '10px 0 0 0',
});

export const AmountParagraph = styled.p({
  color: palette.paragraph.primary,
  fontSize: 20,
  fontWeight: 400,
  marginLeft: 32,
});

export const AmountValue = styled.p({
  color: palette.amonthValue.default,
  margin: '24px 30.5px 16px',
  fontSize: 32,
  fontWeight: 500,
  textAlign: 'right',
});

export const AmountDescription = styled.p({
  color: palette.paragraph.primary,
  margin: '24px 32px',
  fontSize: 12,
  fontWeight: 400,
});

export const Paragraph = styled.p({
  color: palette.paragraph.primary,
  fontSize: 14,
  fontWeight: 400,
  margin: '0 0 6px 0',
});

export const Section = styled.section({
  backgroundColor: palette.brand.secundary,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@media (min-width: 768px)': {
    height: '90vh',
  },
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

  '& > div > div:nth-child(2)': {
    '@media (max-width: 899px)': {
      marginTop: 16,
    },
  },

  '& > div > div:nth-child(1) > div > div': {
    fontFamily: 'Rubik, normal',
    fontSize: 24,
    lineHeight: '120%',
    fontWeight: 500,
  },

  '#input-with-icon-textfield': {
    padding: '10px 0',
  },
});

export const ResultSection = styled.div({
  marginTop: '24px',
});

export const PaperBase = styled(Paper)({
  border: `1px solid ${palette.border.default}`,
  borderRadius: 8,
  background: `linear-gradient(180deg, #FFF 50%, ${palette.brand.secundary} 50%)`,

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
