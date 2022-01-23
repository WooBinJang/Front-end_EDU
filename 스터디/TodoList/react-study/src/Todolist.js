import React, { useEffect, useRef, useState } from "react";
import "./Todolist.css";

function Todolist() {
  // let [todoList, todoListUpdate] = useState(["오늘의 할 일을 입력하세요"]);
  let [todoList, todoListUpdate] = useState([
    {
      text: "오늘의 할 일을 입력하세요",
      id: 0,
      state: 0,
      must: false,
    },
  ]);
  let [todoInput, todoInputUpdate] = useState("");
  let [todoStrong, todoStrongUpdate] = useState(false);

  let todo = (e) => {
    if (todoInput === "") {
      alert("오늘의 할 일을 입력하세요");
      return false;
    }

    let arrList = [...todoList];
    for (let x of arrList) {
      if (x.text === "오늘의 할 일을 입력하세요") {
        arrList.pop();
      } else if (x.text === todoInput) {
        alert("중복되는 목록입니다");
        return false;
      }
    }
    arrList.push({
      text: todoInput,
      id: arrList.length,
      state: 0,
      must: todoStrong,
    });

    todoListUpdate(arrList);

    todoInputUpdate(""); // 입력 후 빈값 만들기
  };
  console.log(todoList);
  // 글자 입력 시 입력값을 저장하는 이벤트
  let todoInputChg = (e) => {
    todoInputUpdate(e.target.value);
  };

  // +Must 클릭시 강조(색이 변경 폰트 사이즈 bold) 이벤트
  let todoStrongChg = () => {
    todoStrongUpdate(!todoStrong);
  };

  // todolist 삭제
  let tododelete = (e) => {
    let li = e.target.parentElement;
    li.remove();
    // 문제점 :  todoList 요소가 계속 남아 있음
    // todoList.splice(li.ld, 1)
  };

  // li 영역 클릭 시 3단계의 변화를 준다. (3번을 초과하면 다시 초기상태로) 진행상태 표시
  function todoStateChg(e) {
    let txt = e.target.innerText.substr(2, e.target.innerText.length - 5);
    let countid = 0;

    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].text === txt) {
        countid = todoList[i].id;
        todoList[i].state += 1;
      }
    }

    if (todoList[countid].state > 2) {
      todoList[countid].state = 0;
    }

    if (todoList[countid].state === 0) {
      document.querySelectorAll(".list-item")[countid].firstChild.innerText =
        "🔴";
    } else if (todoList[countid].state === 1) {
      document.querySelectorAll(".list-item")[countid].firstChild.innerText =
        "🟠";
    } else if (todoList[countid].state === 2) {
      document.querySelectorAll(".list-item")[countid].firstChild.innerText =
        "🟢";
    }
  }

  // console.log(todoList);
  return (
    <div className="todolist-app">
      <div className="note">
        <h1>2022 Planner</h1>
        <ul className="todo">
          {todoList.map((todoItem, index) => {
            return (
              <li
                className={todoItem.must ? "list-item on" : "list-item"}
                key={index}
                onClick={todoStateChg}
              >
                <span>🔴</span>
                {todoItem.text}
                <button
                  type="button"
                  className="list-item-del-btn"
                  onClick={tododelete}
                >
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
