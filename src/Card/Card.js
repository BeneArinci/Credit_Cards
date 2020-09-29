import React from "react";

const Card = ({cardinfo}) => {
  return (
    <div>
      <h3>{cardinfo.name}</h3>
      <p>Apr: <span testid="apr">{cardinfo.apr}</span></p>
      <p>Balance Transfer Offer Duration: <span testid="btod">{cardinfo.balance_transfer_offer_duration}</span></p>
      <p>Purchase Offer Duration: <span testid="pod">{cardinfo.purchase_offer_duration}</span></p>
      <p>Credit Available: £ <span testid="credit">{cardinfo.credit_available}</span></p>
    </div>
  )
}

export default Card