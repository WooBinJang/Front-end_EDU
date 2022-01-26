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
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <Route exact path="/">
        <MainBannerSection />
        <ContentsSection />
        <BottomBannerSection />
      </Route>
      <Route path="/news/:news">
        <News />
      </Route>
      {/* <Route path="/news/:code1">
        <News />
      </Route> */}
      <Route>
        <NotFound />
      </Route>
      <FooterSection />
    </div>
  );
}

export default App;
