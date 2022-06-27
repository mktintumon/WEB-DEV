import React,{useState} from "react";

function Bat() {
  const [bat , setBat] = useState(10)
  const[sell , changeBat] = useState("")

  const sellBat = () => {
    setBat(bat - sell)
    changeBat("")
  }

  const buyBat = () => {
    setBat(bat + sell)
    changeBat("")
  }

  return (
    <>
      <h1>This is Bat</h1>
      <h2>No of Balls : {bat}</h2>

      <input type="text" value={sell} onChange={(e)=>{
        let value = e.target.value
        changeBat(value)
      }} />
      &nbsp;&nbsp;
      <button onClick={sellBat}>SELL</button> 
      &nbsp;&nbsp;
      <button onClick={buyBat}>BUY</button>
    </>
  );
}

export default Bat;
