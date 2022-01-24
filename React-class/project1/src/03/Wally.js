import "./Wally.css";
import React, { useState } from "react";

function Wally() {
  let [height, cngHeight] = useState(170);

  const plus = () => {
    cngHeight(height + 3);
  };

  const minus = () => {
    cngHeight(height - 3);
  };

  return (
    <div className="wally-app">
      <h1 className="logo">윌리키</h1>
      <div className="control">
        <span className="arr-top" onClick={plus}></span>
        <div className="height">{height}</div>
        <span className="arr-bottom" onClick={minus}></span>
      </div>
      {/* control */}
      <div className="wally">
        <div className={height < 160 ? "face on" : "face"}></div>
        <div className="body"></div>
        <div className="leg" style={{ height }}></div>
      </div>
      {/* wally-app */}
    </div>
    /* App */
  );
}

export default Wally;
