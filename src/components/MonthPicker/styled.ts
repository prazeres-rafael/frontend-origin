import styled from 'styled-components';
import { Typography } from '@mui/material';

export const MonthParagraph = styled(Typography)({
  color: '#1E2A32',
  fontSize: 16,
  fontWeight: 600,
  textAlign: 'center',
});

export const YearParagraph = styled(Typography)({
  color: '#8A9CA9',
  fontSize: 16,
  fontWeight: 400,
  textAlign: 'center',
});

export const MonthContent = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  border: '1px solid #E9EEF2',
  borderRadius: 4,

  '& > a > svg': {
    margin: '0 20px',
    cursor: 'pointer',
  },
});
