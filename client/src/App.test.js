import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import apiMock from '../__mocks__/apiMock.json'

import App from './App'

function setupFetchStub(data) {
  return function fetchStub(_url) {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve({
            data,
          }),
      })
    })
  }
}

test('Shows the user form, world!', () => {
  global.fetch = jest.fn().mockImplementation(setupFetchStub(apiMock))
  render(<App />)

  expect(screen.getByTestId("user-form")).toBeInTheDocument()
})