import React from "react";
import ReactDOM, { render } from "react-dom";

const fname = "Vaibhav";
const lname = "Dhokchaule";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname} </h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
