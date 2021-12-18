import React from 'react';
import { BaseButton, ButtonContent } from './styled';

type Props = {
  children: React.ReactNode;
};

export default function Cta({ children }: Props): React.ReactElement {
  return (
    <BaseButton variant="contained">
      <ButtonContent>{children}</ButtonContent>
    </BaseButton>
  );
}
