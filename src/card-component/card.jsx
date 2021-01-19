import React from "react";
import "./card-component.css";

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${monster.id}?set=set5&size=180x180`}
      />
      <h2>{monster.name}</h2>
      <div>{monster.email}</div>
    </div>
  );
};

export default Card;
