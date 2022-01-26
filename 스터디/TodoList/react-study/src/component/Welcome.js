import React, { useState } from "react";
function Welcome() {
  const [wellcome, setWellcome] = useState("");
  let [todoInput, todoInputUpdate] = useState("");

  function wellcomeNameCng(e) {
    todoInputUpdate(e.target.value);
  }

  function wellcomeCng() {
    document.getElementById("input-wellcome").readOnly = true;
  }
  return (
    <div className="Welcome">
      <input
        type="text"
        placeholder="write your name"
        onChange={wellcomeNameCng}
        id="input-wellcome"
      />
      <button onClick={wellcomeCng}>CHECK</button>
    </div>
  );
}

export default Welcome;
