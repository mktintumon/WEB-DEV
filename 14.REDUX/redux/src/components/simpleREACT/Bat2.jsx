import React, { useReducer } from "react";

let initialState = {
  bat: 10,
  value: "",
};

// we have to create object ->
// so that useReducer knows that state get changed
function reducer(state, action) {
  switch (action.type) {
    case "sellBat":
      if(state.bat - state.value < 0){
        return {
          ...state,
          value : ""
        }
      }
      return {
        bat: state.bat - state.value,
        value: "",
      };
      break;
    case "buyBat":
      return {
        bat: state.bat + Number(state.value),
        value: "",
      };
      break;
    case "setValue":
      return {
        bat: state.bat,
        value: action.payLoad,
      };
  }
}

function Bat2() {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Bat</h1>
      <h2>No of Bat:{state.bat}</h2>
      <input
        type="text"
        value={state.value}
        onChange={(e) => {
          let value = e.target.value;
          dispatch({
            type: "setValue",
            payLoad: value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "sellBat" });
        }}
      >
        Sell
      </button>

      <button
        onClick={() => {
          dispatch({ type: "buyBat" });
        }}
      >
        Buy
      </button>
    </>
  );
}

export default Bat2;
