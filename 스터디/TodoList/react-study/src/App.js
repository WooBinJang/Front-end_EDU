import "./App.css";
import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import TodoList from "./component/TodoList";
import Timer from "./component/Timer";
import Welcome from "./component/Welcome";
function App() {
  let imgs = [
    "img0.jpg",
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
  ];
  let random = Math.floor(Math.random() * imgs.length);
  let img = imgs[random];
  let a = {
    backgroundImage: "url(" + require(img) + ")",
  };
  return (
    <div className="App" style={{ a }}>
      <Header />
      <TodoList />
      <Welcome />
      <Timer />
      <Footer />
    </div>
  );
}

export default App;
