import React from "react";
import { UncontrolledCarousel } from "reactstrap";

import main01 from "./img/main01.jpg";
import main02 from "./img/main02.jpg";
function MainBannerSection() {
  return (
    <div className="MainBannerSection">
      <UncontrolledCarousel
        items={[
          {
            altText: "asdsa.",
            caption:
              "Welcome You can make anything with Total. Even this page.",
            key: 1,
            src: main01,
          },
          {
            altText: "Slide 2",
            caption:
              "Welcome You can make anything with Total. Even this page.",
            key: 2,
            src: main02,
          },
        ]}
      />
    </div>
  );
}

export default MainBannerSection;
