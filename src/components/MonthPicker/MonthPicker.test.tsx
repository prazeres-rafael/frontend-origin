import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import React from 'react';

import MonthPicker from './MonthPicker';

describe('MonthPicker', () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  it('should match the snapshot', () => {
    const { container } = render(<MonthPicker />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not decrement if date is less than current date', () => {
    render(<MonthPicker />);

    userEvent.click(screen.getByRole('buttonDecrement'));

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    expect(screen.getByRole('paragraphMonth')).toHaveTextContent(
      months[currentMonth]
    );
    expect(screen.getByRole('paragraphYear')).toHaveTextContent(
      String(currentYear)
    );
  });

  it('should increment month and year after buttonIncrement click', () => {
    render(<MonthPicker />);

    const incrementButton = screen.getByRole('buttonIncrement');
    userEvent.click(incrementButton);

    const date = new Date();
    date.setMonth(date.getMonth() + 1);

    expect(screen.getByRole('paragraphMonth')).toHaveTextContent(
      months[date.getMonth()]
    );
    expect(screen.getByRole('paragraphYear')).toHaveTextContent(
      String(date.getFullYear())
    );
  });

  it('should increment month and year using keyboard when the component is focused', () => {
    render(<MonthPicker />);

    const monthContent = screen.getByRole('monthContent');

    monthContent.focus();

    userEvent.keyboard('{arrowright}');

    const date = new Date();
    date.setMonth(date.getMonth() + 1);

    expect(screen.getByRole('paragraphMonth')).toHaveTextContent(
      months[date.getMonth()]
    );

    userEvent.keyboard('{arrowleft}');

    date.setMonth(new Date().getMonth());

    expect(screen.getByRole('paragraphMonth')).toHaveTextContent(
      months[date.getMonth()]
    );
  });
});
