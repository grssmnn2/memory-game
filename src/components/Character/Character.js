import React from "react";
import "./Character.css";

// here we create the basic character card
const Character = props => (
  <div className="card">
    <div className="img-container remember"onClick={() => props.rememberCharacter(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
  </div>
);

export default Character;