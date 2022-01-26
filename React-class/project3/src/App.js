import "./App.css";
import React from "react";
import About from "./component/About";
import AjaxPage from "./component/AjaxPage";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import UserInfo from "./component/UserInfo";
import Loading from "./component/Loading";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ajax" element={<AjaxPage />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/loding" element={<Loading />} />
      </Routes>
    </div>
  );
}

export default App;
