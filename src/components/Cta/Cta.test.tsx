import { render } from '@testing-library/react';
import React from 'react';

import Cta from './Cta';

describe('Cta', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Cta>Test cta component</Cta>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
