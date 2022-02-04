import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import TodoList from "./component/TodoList";
import Timer from "./component/Timer";
import Welcome from "./component/Welcome";
function App() {
  const [bg, setBg] = useState("/assets/img0.jpg");
  const [say, setSay] = useState({
    say: "삶이 있는 한 희망은 있다",
    name: "로망로랑",
  });
  const [todoOpen, setTodoOpen] = useState(false);
  let saying = [
    { say: "삶이 있는 한 희망은 있다", name: "로망로랑" },
    { say: "산다는것 그것은 치열한 전투이다.", name: "키케로" },
    {
      say: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
      name: "사무엘존슨",
    },
    {
      say: "언제나 현재에 집중할수 있다면 행복할것이다.",
      name: "파울로 코엘료",
    },
    {
      say: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
      name: "찰리 채플린",
    },
    {
      say: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
      name: "엘버트 허버드",
    },
    { say: "신은 용기있는자를 결코 버리지 않는다", name: "켄러" },
    {
      say: "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가우리를 향해 열린 문을 보지 못하게 된다",
      name: "헬렌켈러",
    },
    { say: "피할수 없으면 즐겨라", name: "로버트 엘리엇" },
  ];

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

  useEffect(() => {
    bgChg();
    sayChg();
  }, []);
  const bgChg = (e) => {
    let random = Math.floor(Math.random() * imgs.length);
    let newbg = "/assets/" + imgs[random];
    setBg(newbg);
  };
  const sayChg = (e) => {
    let random = Math.floor(Math.random() * saying.length);
    let newsay = saying[random];
    setSay(newsay);
  };
  const todoOpenCng = () => {
    setTodoOpen(!todoOpen);
  };
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <Header bgChg={bgChg} sayChg={sayChg} todoOpenCng={todoOpenCng} />
      <TodoList todoOpen={todoOpen} />
      <Timer />
      <Welcome />
      <Footer say={say} />
    </div>
  );
}

export default App;
