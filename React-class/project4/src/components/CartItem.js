import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCart } from "../store/action";
import "./CartItem.css";

function CartItem(props) {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartReducer);
  console.log(cart);

  let items = cart.filter((value, index, array) => value.id !== props.item.id);
  return (
    <div className="cart-item">
      <img className="cart-item-img" src={props.item.product_img} alt="" />
      <span className="cart-item-name">{props.item.product_name}</span>
      <span className="cart-item-price">{props.item.price}</span>
      <i
        className="fas fa-trash-alt"
        onClick={() => {
          dispatch(deleteCart(items));
        }}
      ></i>
    </div>
  );
}

export default CartItem;
