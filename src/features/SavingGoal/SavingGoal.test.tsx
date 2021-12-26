import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import React from 'react';

import SavingGoal from './index';

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

describe('SavingGoal', () => {
  it('should match the snapshot', () => {
    const { container } = render(<SavingGoal />);

    expect(container).toMatchSnapshot();
  });

  it('should not decrement if date is less than current date', () => {
    render(<SavingGoal />);

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
    render(<SavingGoal />);

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
    render(<SavingGoal />);

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

  it('should change and calculate the monthly amount onChange of input', () => {
    render(<SavingGoal />);

    userEvent.type(screen.getByRole('textbox'), '100');

    expect(screen.getByRole('amountValue')).toHaveTextContent('100');
  });

  it('should change and calculate the monthly amount onChange of monthPicker', () => {
    render(<SavingGoal />);

    userEvent.type(screen.getByRole('textbox'), '100');
    const incrementButton = screen.getByRole('buttonIncrement');
    userEvent.click(incrementButton);

    expect(screen.getByRole('amountValue')).toHaveTextContent('50');
  });

  it('should change the amount description onChange of input and monthPicker', () => {
    render(<SavingGoal />);

    userEvent.type(screen.getByRole('textbox'), '100');

    expect(screen.getByRole('amountDescription')).toHaveTextContent('100');

    const incrementButton = screen.getByRole('buttonIncrement');
    userEvent.dblClick(incrementButton);

    expect(screen.getByRole('amountDescription')).toHaveTextContent(
      '3 monthly'
    );
  });
});
