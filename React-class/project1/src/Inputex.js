import React, { useState } from "react";

const Inputex = () => {
  let [a, b] = useState();

  const fnc1 = (e) => {
    b(e.target.value);
  };
  const fnc2 = () => {
    b("");
  };
  return (
    <div>
      <input type="text" onChange={fnc1} value={a} />
      <button onClick={fnc2}>클릭</button>
      <p>input 에 입력된 값 {a}</p>
    </div>
  );
};

export default Inputex;
