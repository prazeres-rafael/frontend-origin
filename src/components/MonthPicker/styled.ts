import styled from 'styled-components';
import { palette } from 'utils/palette';

export const MonthParagraph = styled.p({
  color: palette.paragraph.primary,
  fontSize: 16,
  fontWeight: 600,
  textAlign: 'center',
  margin: '3px 0 2px 0',
});

export const YearParagraph = styled.p({
  color: palette.paragraph.secundary,
  fontSize: 16,
  fontWeight: 400,
  textAlign: 'center',
  margin: '2px 0 3px 0',
});

export const MonthContent = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  border: `1px solid ${palette.border.default}`,
  borderRadius: 4,
  justifyContent: 'space-between',

  '& > div': {
    margin: '4px 0',
  },

  '& > button': {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
  },

  '& > button > svg': {
    margin: '0 10px',
  },
});
