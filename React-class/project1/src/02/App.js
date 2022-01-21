import "./App.css";
import Nav from "./Nav";
import Num from "./Num";
import React, { useState } from "react";
import Colorbox from "./Colorbox";
import Inputex from "./Inputex";
import Homework from "./Homework1";
function App() {
  let btn1 = {
    margin: 20,
    fontSize: 30,
    width: 100,
    height: 50,
    border: "none",
    backgroundColor: "#aad4f1",
    color: "#fff",
  };

  const [number, cngNumber] = useState(0);
  const countPlus = () => {
    cngNumber(number + 1);
  };
  const countMinus = () => {
    cngNumber(number - 1);
  };

  const [show, showChg] = useState(false);

  const showNum = () => {
    showChg(!show);
  };
  return (
    <div className="App">
      <Homework />

      <Nav calendar="22" color="green" day="토요일" month={11} />
      {/* props는 값을 설정하지 않으면 true가 설정 된다. */}
      <div>
        <button style={btn1} onClick={countPlus}>
          +
        </button>
        <button style={btn1} onClick={countMinus}>
          -
        </button>
        <p style={{ fontSize: "40px" }}>{number}</p>
      </div>
      <button onClick={showNum}> Num Component Open</button>
      {show ? <Num numCount={number} /> : null}
      <Colorbox />
      <Inputex />
    </div>
  );
}

export default App;
