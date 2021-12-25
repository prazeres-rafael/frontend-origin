import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import MonthPicker from './MonthPicker';

describe('MonthPicker', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <MonthPicker
        date={new Date()}
        decrementMonth={() => jest.fn()}
        incrementMonth={() => jest.fn()}
        month="Janeiro"
        monthByKey={() => jest.fn()}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
