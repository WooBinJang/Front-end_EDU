import React from "react";

function Footer() {
  let bgFooter = {
    background: "#000",
    height: "100px",
    lineHeight: "100px",
    textAlign: "center",
  };
  let addr = {
    color: "#fff",
  };
  return (
    <footer style={bgFooter}>
      <address style={addr}>&copy.2022.01.19 AllrightReserved</address>
    </footer>
  );
}

export default Footer;
