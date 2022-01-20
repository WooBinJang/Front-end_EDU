import React, { useState } from "react";

const Colorbox = () => {
  const [boxState1, setBox1] = useState(false);
  const [boxState2, setBox2] = useState(false);
  const [boxState3, setBox3] = useState(false);

  const boxChg1 = () => {
    setBox1(!boxState1);
  };
  const boxChg2 = () => {
    setBox2(!boxState2);
  };
  const boxChg3 = () => {
    setBox3(!boxState3);
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
      <button style={btn} onClick={boxChg1}>
        빨강
      </button>
      <button style={btn} onClick={boxChg2}>
        파랑
      </button>
      <button style={btn} onClick={boxChg3}>
        노랑
      </button>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {boxState1 ? <div style={box}>빨강</div> : null}
        {boxState2 ? <div style={box}>파랑</div> : null}
        {boxState3 ? <div style={box}>노랑</div> : null}
      </div>
    </div>
  );
};

export default Colorbox;
