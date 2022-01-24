import React, { useEffect, useRef } from "react";

function Input() {
  let inputbox = useRef();
  useEffect(() => {
    inputbox.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputbox} />
    </div>
  );
}

export default Input;

/*
inputbox.current.focus();
inputbox.current.value;

*/
