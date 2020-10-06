import React from 'react';
import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react";
import InvalidInput from './InvalidInput';


test ('informs that something went wrong', () => {
  render(<InvalidInput />)
  expect(screen.getByText("Something went wrong..")).toBeInTheDocument()
})

test ('renders the BackLink', () => {
  render(<InvalidInput />)
  expect(screen.getByTestId("backlink")).toBeInTheDocument()
})