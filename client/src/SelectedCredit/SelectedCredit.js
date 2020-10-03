import React from "react";

const SelectedCredit = ({credit}) => {
  return (
  <p>Your credit for the selected cards is: <span data-testid="credit" >{credit}</span>£</p>
  );
}

export default SelectedCredit