import React from 'react';
import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react";
import UserForm from './UserForm';
import { MemoryRouter } from 'react-router-dom';

test('the card elements for the single provider', () => {
  render(
    <MemoryRouter>
      <UserForm />
    </MemoryRouter>
  );
  const userForm = screen.getByTestId("user-form");
  expect(userForm).toBeInTheDocument();
});