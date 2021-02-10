import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('displays a sidebar', () => {
  render(<App />)
  const sidebar = screen.getByTestId('guest-sidebar')
  expect(sidebar).toBeVisible()
  // expect(sidebar.title).toBe('Guest List')
});
