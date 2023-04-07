import React, { useState, useContext } from "react";
let context = React.createContext(null);

function Text() {
  const [firstName, setFirstName] = useState("Adam");
  const [lastName, setLastName] = useState("Smith");

  return (
    <context.Provider value={{ firstName, lastName }}>
      <h1>This is Parent Component</h1>
      <ChildA />
    </context.Provider>
  );
}

function ChildA() {
  return (
    <>
      <h2>This is ChildA Component.</h2>
      <br />
      <ChildB />
    </>
  );
}

function ChildB() {
  return (
    <>
      <h3>This is ChildB Component.</h3>
      <br />
      <ChildC />
    </>
  );
}

function ChildC() {
  // destructuring happens here
  const { firstName, lastName } = useContext(context);
  return (
    <>
      <h4>This is Child C</h4>
      <h5>{firstName}</h5>
      <h5>{lastName}</h5>
    </>
  );
}

export default Text;