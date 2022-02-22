import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

let storeInt = [
  { name: "홍길동", age: 50 },
  { name: "이순신", age: 40 },
];

function reducer(state = storeInt, act) {
  if (act.type === "add") {
    let arr = [...storeInt];
    arr[0].age += 1;
    return arr;
  } else if (act.type === "minus") {
    let arr = [...storeInt];
    arr[0].age -= 1;
    return arr;
  } else {
    return state;
  }
}
let store = createStore(reducer); //전역에서 쓸 전역변호 선언

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// react-dom version 6
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
