import React from "react";
let ulStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginBottom: "20px",
};
function Nav() {
  return (
    <nav>
      <ul style={ulStyle}>
        <li>
          <a href="#">메뉴 1</a>
        </li>
        <li>
          <a href="#">메뉴 2</a>
        </li>
        <li>
          <a href="#">메뉴 3</a>
        </li>
        <li>
          <a href="#">메뉴 4</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
