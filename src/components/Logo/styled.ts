import styled from 'styled-components';
import LogoBase from 'assets/svg/logo-origin.svg';
import { palette } from 'utils/palette';

export const LogoOrigin = styled(LogoBase)({
  margin: 16,
  fill: palette.paragraph.primary,

  '@media (min-width: 768px)': {
    margin: '24px 56px',
  },
});
