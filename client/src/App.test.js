import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import apiMock from '../__mocks__/apiMock.json'

import App from './App'

global.fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(apiMock),
  });
});

test('Shows the user form', () => {
  render(<App />)
  expect(screen.getByTestId("user-form")).toBeInTheDocument()
})

// test('Shows only one card to the user', () => {

//   render(<App />)
//   const name = screen.getByLabelText('name')
//   const employment = screen.getByLabelText('employment')
//   const income = screen.getByLabelText('income')
//   fireEvent.change(name, { target: { value: 'Mr. Trevor Rieck' } })
//   fireEvent.change(employment, { target: { value: 'part-time' } })
//   fireEvent.change(income, { target: { value: '15000' } })
//   const submit = screen.getByText('Submit')
//   submit.click()
//   screen.debug()

// })

