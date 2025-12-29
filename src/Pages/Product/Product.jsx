import React from "react";
import "./Product.css";
import { FaArrowRight } from "react-icons/fa6";
import ProductCard from "../../components/ProductCard/ProductCard";
import productsData from "../../data/Product";

const Product = ({ cartItems, setCartItems }) => {
  return (
    <div id="products" className="product-container">
      <div className="UpperContainer">
        <div className="title-subtitle">
          <h1>Featured Collection</h1>
          <span>Handpicked premium items just for you</span>
        </div>
        <div className="products-view">
          <a href="#products">View all Products <FaArrowRight /></a>
        </div>
      </div>
      <div className="LowerContainer">
        {productsData.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
