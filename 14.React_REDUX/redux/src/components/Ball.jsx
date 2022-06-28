import React from "react";
import { connect } from "react-redux";

function Ball(props) {
  console.log(props);
  return (
    <>
      <h1>Balls</h1>
      <h2>No of Balls:{props.balls}</h2>
      <button onClick={props.buyBall}>+</button>
      <button onClick={props.sellBall}>-</button>
    </>
  );
}

// this will send data to props to above function as argument
const mapStateToProps = (store) => {
  return store.Ball;
};

// dispatch
const mapDispatchtoProps = (dispatch) => {
  return {
    sellBall: () => {
      dispatch({
        type: "decrement",
      });
    },
    buyBall: () => {
      dispatch({
        type: "increment",
      });
    },
  };
};

// to give access to the component to two things
//  first store  -> mapsstatetoprops
// second  -> dispatch -> mapdispatchtoprops
const connectdWIthpropsFns = connect(mapStateToProps, mapDispatchtoProps);

const connectedWithBall = connectdWIthpropsFns(Ball);
export default connectedWithBall;
