import styled from 'styled-components';
import { Button } from '@mui/material';
import { fontFamily } from 'utils/font';
import { palette } from 'utils/palette';

export const ButtonContent = styled.span({
  margin: '18px 128px',
  fontFamily: fontFamily,
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 600,
});

export const BaseButton = styled(Button)({
  backgroundColor: palette.brand.primary,
  borderRadius: 32,
});
