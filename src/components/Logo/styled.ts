import styled from 'styled-components';
import LogoBase from '../../assets/svg/logo.svg';

export const LogoOrigin = styled(LogoBase)({
  margin: 16,
  fill: '#1E2A32',

  '@media (min-width: 768px)': {
    margin: '24px 56px',
  },
});
