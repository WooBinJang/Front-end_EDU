import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
function Nav() {
  const navigate = useNavigate();
  const count = useSelector((store) => store.cartReducer);
  return (
    <nav className="nav">
      <h1
        className="nav-title"
        onClick={() => {
          navigate("/");
        }}
      >
        Hnm
      </h1>
      <i
        className="fas fa-shopping-cart"
        onClick={() => {
          navigate("/cart");
        }}
      >
        <span className="cart-amount">{count.length}</span>
      </i>
    </nav>
  );
}

export default Nav;
