import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './index';

test('jest checking', () => {
  const { container } = render(<App />);
  screen.debug(container);
  expect(true).toBeTruthy();
});

test('empty test', () => {
});
