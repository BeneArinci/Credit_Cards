import React from 'react';
import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react";
import Card from './Card';


test("renders the content of the passed card info", () => {
  const card =   {
    name: "Student Life",
    apr: "18.9%",
    balance_transfer_offer_duration: "0 Months",
    purchase_offer_duration: "6 Months",
    credit_available: 1200,
    availability: "students"
  }
  render(<Card cardinfo = {card}/>)
  const name = screen.getByText("Student Life")
  const apr = screen.getByText("18.9%")
  const btod = screen.getByText("0 Months")
  const pod = screen.getByText("6 Months")
  const credit = screen.getByText("1200")

  expect(name).toBeInTheDocument()
  expect(apr).toBeInTheDocument()
  expect(btod).toBeInTheDocument()
  expect(pod).toBeInTheDocument()
  expect(credit).toBeInTheDocument()
})