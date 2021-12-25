import React from 'react';
import { Logo as LogoBase } from 'components';
import { HeaderOrigin } from './styled';

export default function Header(): React.ReactElement {
  return (
    <HeaderOrigin>
      <LogoBase />
    </HeaderOrigin>
  );
}
