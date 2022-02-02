import React from "react";
import "./Footer.css";
function Footer({ say }) {
  return (
    <footer className="Footer">
      <h2>{say.say}</h2>
      <h3>- {say.name}</h3>
    </footer>
  );
}

export default Footer;
