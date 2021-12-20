import { render } from '@testing-library/react';
import React from 'react';

import Card from './Card';

describe('Card', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Card />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
