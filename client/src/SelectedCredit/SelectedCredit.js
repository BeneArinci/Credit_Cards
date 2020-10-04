import React from "react";
import './SelectedCredit.css'

const SelectedCredit = ({credit}) => {
  return (
    <div className="header credit">
      <p>Your credit for the selected cards is: <span data-testid="credit" >{credit}</span>£</p>
    </div>
  
  );
}

export default SelectedCredit