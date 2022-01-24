import "./App.css";
import React, { createContext } from "react";
// import Effect1 from "./Effect1";
// import Effect2 from "./Effect2";
// import Input_useRef from "./Input_useRef";
import Todolist from "./Todolist";
export const GlobalConetext = createContext();
function App() {
  // const Obj = {
  //   name: "홍길동",
  //   age: 20,
  // };
  return (
    <div className="App">
      {/* <GlobalConetext.Provider value={Obj}>
      
      </GlobalConetext.Provider> */}
      <Todolist />
    </div>
  );
}
export default App;
