import React from 'react';
import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react";
import UserForm from './UserForm';

test('the card elements for the single provider', () => {
  render(<UserForm />);
  const userForm = screen.getByTestId("user-form");
  expect(userForm).toBeInTheDocument();
});