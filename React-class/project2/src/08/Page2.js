import React from "react";
import { Link } from "react-router-dom";

function Page2() {
  return (
    <div className="page2">
      <h1>페이지2</h1>
      <Link to="/">페이지1로 이동</Link>
    </div>
  );
}

export default Page2;
