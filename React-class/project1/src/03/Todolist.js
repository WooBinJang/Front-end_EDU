import React, { useState } from "react";
import "./Todolist.css";

function Todolist() {
  let [todoList, todoListUpdate] = useState(["오늘의 할 일을 입력하세요"]);
  let [todoInput, todoInputUpdate] = useState("");
  let todo = () => {
    let arrList = [...todoList];
    for (let x of arrList) {
      if (x === "오늘의 할 일을 입력하세요") {
        arrList.pop();
      }
    }
    arrList.unshift(todoInput);
    todoListUpdate(arrList);
  };

  return (
    <div className="todolist-app">
      <div className="note">
        <h1>2022 Planner</h1>
        <ul className="todo">
          {todoList.map((a, index) => {
            return (
              <li className="list-item" key={index}>
                {a}
              </li>
            );
          })}
        </ul>
        <div className="write">
          <div className="todo-form">
            <label htmlFor="todo-field">+Must</label>
            <input
              type="text"
              id="todo-field"
              className="todo-field-box"
              onChange={(e) => {
                todoInputUpdate(e.target.value);
              }}
            />
            <button className="submit" onClick={todo}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Todolist;
