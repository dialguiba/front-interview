import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card-container">
      <div className="card-container__left">
        <p className="card-container__name">{props.name}</p>
        <p className="card-container__email">{props.email}</p>
        <p className="card-container__phone">{props.phone}</p>
        <button>edit</button>
        <button>delete</button>
      </div>
      <div className="card-container__right">
        <p>{props.type}</p>
      </div>
    </div>
  );
}

export default Card;
