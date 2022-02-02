import React from "react";
import "./Header.css";
function Header({ bgChg, sayChg, todoOpenCng }) {
  return (
    <nav className="Header">
      <ul>
        <li
          onClick={() => {
            bgChg();
          }}
        >
          change
          <br /> background
        </li>
        <li
          onClick={() => {
            sayChg();
          }}
        >
          change
          <br /> saying
        </li>
        <li
          onClick={() => {
            todoOpenCng();
          }}
        >
          TodoList
        </li>
      </ul>
    </nav>
  );
}

export default Header;
