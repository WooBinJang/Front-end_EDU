import React, { createContext, useEffect, useState } from "react";
import Input from "./Input";
import Todo from "./Todo";
import "./Todolist.css";
export const UpdateContext = createContext();

function Todolist() {
  let [todoList, todoListUpdate] = useState(["오늘의 할 일을 입력하세요"]);
  let [todoInput, todoInputUpdate] = useState("");

  let arrList = [...todoList];
  let todo = () => {
    if (todoInput === "") {
      alert("오늘의 할 일을 입력해 주세요.");
      return false;
    }
    arrList.push(todoInput);
    todoListUpdate(arrList);
  };

  let todoCheckFnc = (e) => {
    e.target.classList.toggle("on");
  };

  return (
    <div className="todolist-app">
      <UpdateContext.Provider value={arrList}>
        <div className="note">
          <h1>2022 Planner</h1>
          <Todo
            todoList={todoList}
            todoListUpdate={todoListUpdate}
            todoCheckFnc={todoCheckFnc}
          />
          <div className="write">
            <Input
              todo={todo}
              todoList={todoList}
              todoInputUpdate={todoInputUpdate}
            />
          </div>
        </div>
      </UpdateContext.Provider>
    </div>
  );
}
export default Todolist;
