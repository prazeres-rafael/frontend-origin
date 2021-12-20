import React from 'react';
import Logo from '../../components/Logo';
import { HeaderOrigin } from './styled';

export default function Header(): React.ReactElement {
  return (
    <HeaderOrigin>
      <Logo />
    </HeaderOrigin>
  );
}