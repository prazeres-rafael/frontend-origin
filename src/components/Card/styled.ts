import styled from 'styled-components';
import { Card, CardContent } from '@mui/material';

export const BaseCard = styled(Card)({
  boxShadow: '0px 16px 32px rgba(30, 42, 50, 0.08)',
  borderRadius: 8,
  width: '100%',

  '@media (min-width: 768px)': {
    width: '560px',
  },
});

export const BaseCardContent = styled(CardContent)({
  padding: '40px 24px',

  ':last-child': {
    paddingBottom: 40,
  },

  '@media (min-width: 768px)': {
    padding: '40px',
  },
});
