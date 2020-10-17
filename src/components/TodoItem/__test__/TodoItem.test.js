import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from '../../todo/Todo';

it('renders without crashing', () => {
  const { getAllByText, getByText } = render(<Todo />);
  screen.debug();

  getAllByText('Delete');
  getByText('+');
});
