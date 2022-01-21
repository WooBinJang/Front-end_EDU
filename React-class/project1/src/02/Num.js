import React from "react";

const Num = ({ numCount }) => {
  let btn1 = {
    margin: 20,
    fontSize: 30,
    width: 100,
    height: 50,
    border: "none",
    backgroundColor: "#aad4f1",
    color: "#fff",
  };

  return (
    <div>
      {/* <button style={btn1}>+</button>
      <button style={btn1}>-</button> */}
      <p style={{ fontSize: "40px" }}>{numCount}</p>
    </div>
  );
};

export default Num;
