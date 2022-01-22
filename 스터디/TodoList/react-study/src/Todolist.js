import React, { useState } from "react";
import "./Todolist.css";

function Todolist() {
  let [todoList, todoListUpdate] = useState(["오늘의 할 일을 입력하세요"]);
  let [todoInput, todoInputUpdate] = useState("");
  let [todoStrong, todoStrongUpdate] = useState(false);
  let todo = (e) => {
    let arrList = [...todoList];
    for (let x of arrList) {
      if (x === "오늘의 할 일을 입력하세요") {
        arrList.pop();
      }
    }
    arrList.push(todoInput);
    todoListUpdate(arrList);

    todoInputUpdate(""); // 입력 후 빈값 만들기
  };

  // 글자 입력 시 입력값을 저장하는 이벤트
  let todoInputChg = (e) => {
    todoInputUpdate(e.target.value);
  };

  // +Must 클릭시 강조(색이 변경 폰트 사이즈 bold) 이벤트
  let todoStrongChg = () => {
    todoStrongUpdate(!todoStrong);
  };

  return (
    <div className="todolist-app">
      <div className="note">
        <h1>2022 Planner</h1>
        <ul className="todo">
          {todoList.map((todoItem, index) => {
            return (
              <li className="list-item" key={index} id={index}>
                {todoStrong ? (
                  <span style={{ color: "red" }}> {todoItem}</span>
                ) : (
                  <span> {todoItem}</span>
                )}
                <button type="button" className="list-item-del-btn">
                  삭제
                </button>
              </li>
            );
          })}
        </ul>
        <div className="write">
          <div className="todo-form">
            <label
              className={todoStrong ? "on" : null}
              htmlFor="todo-field"
              onClick={todoStrongChg}
            >
              +Must
            </label>
            <input
              type="text"
              id="todo-field"
              className="todo-field-box"
              placeholder="오늘의 할 일을 입력하세요."
              value={todoInput}
              onChange={todoInputChg}
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
