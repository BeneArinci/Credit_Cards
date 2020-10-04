import React from "react";
import './SelectedCredit.css'

const SelectedCredit = ({credit}) => {
  return (
    <div className="header credit">
      <h3>Your credit for the selected cards is: <span className="credit-num" data-testid="credit" >{credit}</span>£</h3>
    </div>
  
  );
}

export default SelectedCredit