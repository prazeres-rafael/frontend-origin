import React from 'react';
import { LogoOrigin } from './styled';

type Props = {
  isWhite?: boolean;
};

export default function Logo({ isWhite = false }: Props): React.ReactElement {
  return <LogoOrigin $isWhite={isWhite} />;
}
