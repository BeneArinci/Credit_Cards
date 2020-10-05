import React from "react";

const Header = ({userName}) => {
  return (
  <div className="header">
    <h2 data-testid="welcome-msg">Hi <span data-testid= "user">{userName}</span>, select the available cards and calculate your total credit</h2>
  </div>
  
  );
}

export default Header