import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        {/* exact : path에 해당하는 경로만 라우팅 해준다 */}
        <Page1 />
      </Route>
      <Route exact path="/page2" component={Page2}></Route>
      <Footer />
    </div>
  );
}

export default App;
