import React, { useEffect, useRef, useState } from "react";
import "./Todolist.css";

function Todolist() {
  const nextId = useRef(0);

  let [todoList, todoListUpdate] = useState([
    {
      text: "오늘의 할 일을 입력하세요", // 내용
      id: nextId.current,
      state: 0, // 색
      must: false, // 강조
    },
  ]);
  let [todoInput, todoInputUpdate] = useState("");
  let [todoStrong, todoStrongUpdate] = useState(false);

  // ADD 버튼 클릭 시 이벤트
  let todo = (e) => {
    if (todoInput === "") {
      alert("오늘의 할 일을 입력하세요");
      return false;
    } //입력값이 없을 경우 false

    let arrList = [...todoList];
    for (let x of arrList) {
      if (x.text === "오늘의 할 일을 입력하세요") {
        arrList.pop();
      } else if (x.text === todoInput) {
        alert("중복되는 목록입니다");
        return false;
      }
    } // 색 변경에서 text 값으로 비교 함으로 중복 x  오늘의 할 일을 입력하세요  제거

    arrList.push({
      text: todoInput,
      id: nextId.current,
      state: 0,
      must: todoStrong,
    });

    nextId.current += 1;

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

  // todolist 삭제
  let tododelete = (index) => {
    const arr = [...todoList];
    todoListUpdate(arr.filter((x) => x.id !== index));
  };

  // li 영역 클릭 시 3단계의 변화를 준다. (3번을 초과하면 다시 초기상태로) 진행상태 표시
  function todoStateChg(e) {
    let txt = e.target.innerText.substr(2, e.target.innerText.length - 5);
    // todolist.txt 값 뽑기
    let countid = 0;
    //index 번호 (li n번째 위치를 찾기 위해)

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

  return (
    <div className="todolist-app">
      <div className="note">
        <h1>2022 Planner</h1>
        <ul className="todo">
          {todoList.map((todoItem) => {
            return (
              <li
                className={todoItem.must ? "list-item on" : "list-item"}
                key={todoItem.id}
                onClick={todoStateChg}
              >
                <span>🔴</span>
                {todoItem.text}
                <button
                  type="button"
                  className="list-item-del-btn"
                  onClick={() => {
                    tododelete(todoItem.id);
                  }}
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
