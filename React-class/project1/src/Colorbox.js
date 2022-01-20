import React, { useState } from "react";

const Colorbox = () => {
  const [boxState, setBox] = useState([false, false, false]);

  const showBox = (a) => {
    let newArray = [...boxState];
    newArray[a] = !newArray[a];
    setBox(newArray);
    console.log(boxState);
  };

  let btn = {
    width: "100px",
    height: "30px",
    margin: "10px",
  };
  let box = {
    width: "200px",
    height: "200px",
    border: "1px solid #666",
    margin: "10px",
  };

  return (
    <div>
      <button style={btn} onClick={() => showBox(0)}>
        빨강
      </button>
      <button style={btn} onClick={() => showBox(1)}>
        파랑
      </button>
      <button style={btn} onClick={() => showBox(2)}>
        노랑
      </button>
      <h1>asdas{boxState}</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {boxState[0] ? <div style={box}>빨강</div> : null}
        {boxState[1] ? <div style={box}>파랑</div> : null}
        {boxState[2] ? <div style={box}>노랑</div> : null}
      </div>
    </div>
  );
};

export default Colorbox;
