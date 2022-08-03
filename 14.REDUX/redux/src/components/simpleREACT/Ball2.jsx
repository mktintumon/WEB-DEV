import React, { useReducer } from "react";

//USING useReducer 

function reducer(state , action){
   switch(action.type){
    case 'increment' :
        return state + 1
    case 'decrement' :
        return state - 1    
   }
}

function Ball2() {
    const [ball, dispatch] = useReducer(reducer, 10)

  return (
    <>
      <h1>This is Ball</h1>
      <h2>No of Balls : {ball}</h2>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export default Ball2;
