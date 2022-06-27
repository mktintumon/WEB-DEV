import React, { useState } from "react";

// USING useState 

function Ball() {
  const [ball, setBall] = useState(10);

  const increment = () => {
    setBall(ball + 1);
  };
  const decrement = () => {
    setBall(ball - 1);
  };

  return (
    <>
      <h1>This is Ball</h1>
      <h2>No of Balls : {ball}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default Ball;
