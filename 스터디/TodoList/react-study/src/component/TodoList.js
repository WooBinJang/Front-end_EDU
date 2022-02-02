import React, { useRef, useState } from "react";
import "./TodoList.css";
function TodoList({ todoOpen }) {
  const nextId = useRef(0);

  let [todoList, todoListUpdate] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  let todo = (e) => {
    if (todoInput === "") {
      alert("오늘의 할 일을 입력하세요");
      return false;
    }
    let arrList = [...todoList];
    arrList.push({
      text: todoInput,
      id: nextId.current,
      check: false,
    });
    nextId.current += 1;
    todoListUpdate(arrList);
    setTodoInput("");
  };

  function todoInputCng(e) {
    setTodoInput(e.target.value);
  }

  let tododelete = (id) => {
    const arr = [...todoList];
    todoListUpdate(arr.filter((x) => x.id !== id));
  };

  let todoCheck = (id) => {
    const arr = [...todoList];

    for (let x of arr) {
      if (x.id === id) {
        x.check = !x.check;
      }
    }
    todoListUpdate(arr);
  };
  console.log(todoList);
  return (
    <section>
      {todoOpen ? (
        <div className="TodoList">
          <div>
            <h1>To-Do List</h1>
            <div className="todo-input-box">
              <input
                type="text"
                placeholder="write your task"
                onChange={todoInputCng}
              />
              <button onClick={todo}>ADD</button>
            </div>
            <div>
              <ul className="todo">
                {todoList.map((todoItem) => {
                  return (
                    <li
                      key={todoItem.id}
                      className={
                        todoItem.check ? "todo-item check" : "todo-item"
                      }
                    >
                      <span> {todoItem.text}</span>
                      <button
                        className="check-btn"
                        type="button"
                        onClick={() => {
                          todoCheck(todoItem.id);
                        }}
                      >
                        ✔
                      </button>
                      <button
                        className="del-btn"
                        type="button"
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
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default TodoList;
