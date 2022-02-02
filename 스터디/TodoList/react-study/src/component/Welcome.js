import React, { useState } from "react";
import "./Welcome.css";
function Welcome() {
  const [todoInput, todoInputUpdate] = useState("");
  const [inputCheck, setInputCheck] = useState(true);

  function wellcomeNameCng(e) {
    todoInputUpdate(e.target.value);
  }

  function wellcomeCng() {
    document.getElementById("input-wellcome").readOnly = true;
    setInputCheck(false);
  }

  return (
    <div className="Welcome">
      {inputCheck ? (
        <div>
          <input
            type="text"
            placeholder="write your name"
            onChange={wellcomeNameCng}
            id="input-wellcome"
          />
          <button onClick={wellcomeCng}>CHECK</button>
        </div>
      ) : (
        <h3>Hello!! {todoInput}</h3>
      )}
    </div>
  );
}

export default Welcome;
