import React from "react";
import { Link } from "react-router-dom";

function Page1() {
  return (
    <div className="page1">
      <h1>페이지1</h1>
      <Link to="/page2">페이지2로 이동</Link>
    </div>
  );
}

export default Page1;
