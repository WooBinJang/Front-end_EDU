import React, { useContext } from "react";
import { UpdateContext } from "./Todolist";
function Todo(props) {
  const updateLi = useContext(UpdateContext);

  return (
    <ul className="todo">
      {props.todoList.map((a, index) => {
        return (
          <li className="list-item" key={index}>
            <span onClick={props.todoCheckFnc}>check</span>
            {a}
            <button
              className="list-item-del-btn"
              onClick={() => {
                var cng = updateLi.filter((x) => x !== a);
                props.todoListUpdate([...cng]);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Todo;
