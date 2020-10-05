import React from 'react';
import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react";
import Header from './Header';

test('refers to the user by name', () => {
  const username = "John"
  render(<Header userName = {username}/>)
  const renderedName = screen.getByTestId("user").textContent
  expect(renderedName).toEqual("John")
})

test('renders the welcome message', () => {
  const username = "John"
  render(<Header userName = {username}/>)
  const welcomemsg = screen.getByTestId("welcome-msg")
  expect(welcomemsg).toBeInTheDocument()
})