import React, { useState } from "react";

const Homework = () => {
  const [buttontxet, setbuttontxet] = useState("");

  const event = (e) => {
    setbuttontxet(e.target.outerText);
  };
  return (
    <div>
      <button onClick={event}>A</button>
      <button onClick={event}>B</button>
      <h1>버튼에 입력된 값 : {buttontxet}</h1>
    </div>
  );
};

export default Homework;
