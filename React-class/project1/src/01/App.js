import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  let txt1 = { fontSize: "20px", color: "#698", fontWeight: "bold" };
  let daylist = "2022년 01월 19일";
  return (
    <div className="App">
      <h1 className="title">리액트 시작하기</h1>
      <Nav />
      <ul
        style={{
          fontSize: "50px",
          width: "300px",
          backgroundColor: "#698",
          color: "#fff",
          margin: "auto",
        }}
      >
        <li>2022</li>
        <li>2023</li>
        <li>2024</li>
      </ul>
      <h3 style={{ fontSize: "25px", color: "#672" }}>{daylist}</h3>
      <p style={txt1}>스타일 적용하기</p>
      <Footer />
    </div>
  );
}

export default App;
