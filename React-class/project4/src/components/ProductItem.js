import React, { useEffect, useState } from "react";
import "./ProductItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../store/action";
function ProductItem({ item }) {
  const [cartCheck, setCartCheck] = useState(false);
  const items = useSelector((store) => store.cartReducer);

  const dispatch = useDispatch();
  return (
    <div className="ProductItem">
      <img className="item-image" src={item.product_img} alt="상품" />
      <div className="item-name">{item.product_name}</div>
      <div className="item-price">{item.price}원</div>
      <button
        onClick={() => {
          items.map((x) => {
            if (x.id === item.id) {
              setCartCheck(false);
            }
          });
          if (cartCheck) {
            dispatch(addCart(item));
          }
        }}
        className="add-cart-btn"
      >
        <i className="fas fa-plus"> Cart</i>
      </button>
    </div>
  );
}

export default ProductItem;
