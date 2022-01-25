import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "./img/news01.jpg";
import CardList from "./CardList";
import Tabbox from "./img/Tabbox";
import Carouselbox from "./Carouselbox";
function App() {
  return (
    <div className="App">
      <img src={img1} alt="" />
      <img src={require("./img/news02.jpg")} alt="" />

      <CardList />
      <Tabbox />
      <Carouselbox />
    </div>
  );
}

export default App;
