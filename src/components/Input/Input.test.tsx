import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Input from './Input';

describe('Input', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Input />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not allow input alfabect letters', () => {
    render(<Input />);

    userEvent.type(screen.getByRole('textbox'), 'Hello, World!');
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('should allow input numbers', () => {
    render(<Input />);

    userEvent.type(screen.getByRole('textbox'), '100');
    expect(screen.getByRole('textbox')).toHaveValue('100');
  });

  it('when the user type letters and numbers should return only numbers', () => {
    render(<Input />);

    userEvent.type(screen.getByRole('textbox'), '1test2test3');
    expect(screen.getByRole('textbox')).toHaveValue('123');
  });

  it('should mask the input value as dollar currency', () => {
    render(<Input />);

    userEvent.type(screen.getByRole('textbox'), '100000000.50');
    expect(screen.getByRole('textbox')).toHaveValue('100,000,000.50');
  });
});
