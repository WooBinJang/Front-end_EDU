import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import HeaderSection from "./HeaderSection";
import MainBannerSection from "./MainBannerSection";
import ContentsSection from "./ContentsSection";
import BottomBannerSection from "./BottomBannerSection";
import FooterSection from "./FooterSection";
import { Route } from "react-router-dom";
import News from "./News";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <Route exact path="/">
        <MainBannerSection />
        <ContentsSection />
        <BottomBannerSection />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/news/:code1">
        <News />
      </Route>
      <FooterSection />
    </div>
  );
}

export default App;
