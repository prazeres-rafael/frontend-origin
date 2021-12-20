import { render } from '@testing-library/react';
import React from 'react';

import Logo from './Logo';

describe('Logo', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Logo />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
