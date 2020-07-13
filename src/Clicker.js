import React from "react";

const Clicker = ({ amount, dispatch }) => (
  <div className="clicker">
    <h1>{amount}</h1>
    <button
      className="buy"
      type="button"
      onClick={() => dispatch({ type: "click" })}
    >
      Click Button
    </button>
  </div>
);

export default Clicker;
