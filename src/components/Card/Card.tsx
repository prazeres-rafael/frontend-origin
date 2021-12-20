import React from 'react';
import { BaseCard, BaseCardContent } from './styled';

type Props = {
  children?: React.ReactNode;
};

export default function Card({ children }: Props): React.ReactElement {
  return (
    <BaseCard>
      <BaseCardContent>{children}</BaseCardContent>
    </BaseCard>
  );
}
