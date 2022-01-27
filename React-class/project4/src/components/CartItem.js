import React from "react";
import "./CartItem.css";
function CartItem(props) {
  return (
    <div className="cart-item">
      <img className="cart-item-img" src={props.item.product_img} alt="" />
      <span className="cart-item-name">{props.item.product_name}</span>
      <span className="cart-item-price">{props.item.price}</span>
      <i className="fas fa-trash-alt"></i>
    </div>
  );
}

export default CartItem;
