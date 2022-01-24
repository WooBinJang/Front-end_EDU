import React, { useEffect, useRef } from "react";

function Input(props) {
  const focusInput = useRef();
  useEffect(() => {
    focusInput.current.focus();
    focusInput.current.value = "";
    props.todoInputUpdate("");
  }, [props.todoList]);

  return (
    <div className="todo-form">
      <label htmlFor="todo-field">+Must</label>
      <input
        type="text"
        id="todo-field"
        className="todo-field-box"
        ref={focusInput}
        onChange={(e) => {
          props.todoInputUpdate(e.target.value);
        }}
      />
      <button className="submit" onClick={props.todo}>
        ADD
      </button>
    </div>
  );
}

export default Input;

/*
inputbox.current.focus();
inputbox.current.value;

*/
