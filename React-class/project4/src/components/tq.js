import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";
function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("/data/productList.json")
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((response) => {
        console.log(response);
        setProduct(response.productList);
      });
  }, []);

  const itemList = product.map((item) => {
    return <ProductItem key={item.id} item={item} />;
  });

  return (
    <section className="product-list">
      <h2 className="product-item-title">상품 목록</h2>
      <div className="product-item-container">{itemList}</div>
    </section>
  );
}

export default ProductList;
