import "./App.css";

import React from "react";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </div>
  );
}

export default App;
