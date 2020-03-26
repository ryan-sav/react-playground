import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders todo component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Pending tasks/i);
  expect(linkElement).toBeTruthy();
});
