import React from "react";

const Header = ({userName}) => {
  return (
  <h2 data-testid="welcome-msg">Hi <span data-testid= "user">{userName}</span>, select the available cards and calculate your total credit</h2>
  );
}

export default Header