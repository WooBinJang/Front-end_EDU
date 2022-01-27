import React from "react";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { addCart } from "../store/action";
function ProductItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="ProductItem">
      <img className="item-image" src={item.product_img} alt="상품" />
      <div className="item-name">{item.product_name}</div>
      <div className="item-price">{item.price}원</div>
      <button
        onClick={() => {
          dispatch(addCart(item));
        }}
        className="add-cart-btn"
      >
        <i className="fas fa-plus"> Cart</i>
      </button>
    </div>
  );
}

export default ProductItem;
