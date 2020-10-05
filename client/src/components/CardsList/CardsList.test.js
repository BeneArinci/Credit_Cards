import React from 'react';
import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react";
import CardsList from './CardsList';





test("renders the content of the passed card info and the selected credit component", () => {
  const cards =   [
    {
      name: "Student Life",
      apr: "18.9%",
      balance_transfer_offer_duration: "0 Months",
      purchase_offer_duration: "6 Months",
      credit_available: 1200,
      availability: "students"
    },
    {
      name: "Anywhere Card",
      apr: "33.9%",
      balance_transfer_offer_duration: "0 Months",
      purchase_offer_duration: "0 Months",
      credit_available: 300,
      availability: "anyone"
    },
  ]
  render(<CardsList filteredcards = {cards}/>);
  const creditComponent = screen.getByTestId('credit')
  const name1 = screen.getByText("Student Life");
  const name2 = screen.getByText("Anywhere Card")
  expect(creditComponent).toBeInTheDocument()
  expect(name1).toBeInTheDocument()
  expect(name2).toBeInTheDocument()
})

test("renders the credit value for the selected cards", () => {
  const cards =   [
    {
      name: "Student Life",
      apr: "18.9%",
      balance_transfer_offer_duration: "0 Months",
      purchase_offer_duration: "6 Months",
      credit_available: 1200,
      availability: "students"
    },
    {
      name: "Anywhere Card",
      apr: "33.9%",
      balance_transfer_offer_duration: "0 Months",
      purchase_offer_duration: "0 Months",
      credit_available: 300,
      availability: "anyone"
    },
  ]
  render(<CardsList filteredcards = {cards}/>);
  const renderedCards = screen.getAllByTestId("single-card")
  renderedCards[0].click()
  renderedCards[1].click()
  const credit = screen.getByText('1500')
  expect(credit).toBeInTheDocument()
 
})

test("renders the credit total value for the selected cards", () => {
  const cards =   [
    {
      name: "Student Life",
      apr: "18.9%",
      balance_transfer_offer_duration: "0 Months",
      purchase_offer_duration: "6 Months",
      credit_available: 1200,
      availability: "students"
    },
    {
      name: "Anywhere Card",
      apr: "33.9%",
      balance_transfer_offer_duration: "0 Months",
      purchase_offer_duration: "0 Months",
      credit_available: 300,
      availability: "anyone"
    },
  ]
  render(<CardsList filteredcards = {cards}/>);
  const renderedCards = screen.getAllByTestId("single-card")
  renderedCards[0].click()
  renderedCards[1].click()
  const credit = screen.getByText('1500')
  expect(credit).toBeInTheDocument()
})

test("updates the credit value when the card is deselected", () => {
  const cards =   [
    {
      name: "Student Life",
      apr: "18.9%",
      balance_transfer_offer_duration: "0 Months",
      purchase_offer_duration: "6 Months",
      credit_available: 1200,
      availability: "students"
    },
    {
      name: "Anywhere Card",
      apr: "33.9%",
      balance_transfer_offer_duration: "0 Months",
      purchase_offer_duration: "0 Months",
      credit_available: 300,
      availability: "anyone"
    },
  ]
  render(<CardsList filteredcards = {cards}/>);
  const renderedCards = screen.getAllByTestId("single-card")
  renderedCards[0].click()
  renderedCards[1].click()
  const credit = screen.getByText('1500')
  expect(credit).toBeInTheDocument()
  renderedCards[0].click()
  renderedCards[1].click()
  const updatedCredit = screen.getByText('0')
})

