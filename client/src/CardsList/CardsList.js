import React from "react";
import Card from "../Card/Card";

const CardsList = ({filteredcards}) => {
  return (
    <div className="flex flex-wrap">
      {
        filteredcards.map((card, index) => {
          return <Card key = {index} cardinfo = {card}/>
        })
      }
    </div>
  );
}

export default CardsList