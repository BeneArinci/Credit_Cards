import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import App from './App'

test('Shows Hello, world!', () => {
  render(<App />)

  expect(screen.getByTestId("user-form")).toBeInTheDocument()
})