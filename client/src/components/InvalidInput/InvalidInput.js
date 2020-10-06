import React from "react";
import BackLink from "../BackLink/BackLink"

const InvalidInput = () => {
  return (
    <div>
      <h1>Something went wrong..</h1>
      <h3>The data you entered is not valid<br />Please, go back and enter again your data</h3>
      <BackLink />
    </div>
  );
}

export default InvalidInput