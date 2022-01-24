import "./App.css";
import React, { useState } from "react";
import Item from "./Item";
import Title from "./Title";
import Counter from "./Counter";
import Wally from "./Wally"; // <Wally />
import Todolist from "./Todolist";
function App() {
  return (
    <div className="App">
      <Todolist />
      {/* <Item />
      <Counter />
      <Title />
      <Wally /> */}
    </div>
  );
}
export default App;
