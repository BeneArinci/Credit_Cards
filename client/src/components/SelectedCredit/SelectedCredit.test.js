import React from 'react';
import '@testing-library/jest-dom'
import { screen, render, getByText } from "@testing-library/react";
import SelectedCredit from './SelectedCredit'

test ('renders the total credit', () => {
  const credit = 300
  render(<SelectedCredit credit = {credit} />)
  const displayedCredit = screen.getByText('300')
  expect(displayedCredit).toBeInTheDocument()
})