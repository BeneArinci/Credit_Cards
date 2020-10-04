import React from 'react';
import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react";
import BackLink from "./BackLink"
import { MemoryRouter } from 'react-router-dom';

test('shows the link', () => {
  render( 
    <MemoryRouter>
      <BackLink />
    </MemoryRouter>
  );
  expect(screen.getByText("Back")).toBeInTheDocument()
})