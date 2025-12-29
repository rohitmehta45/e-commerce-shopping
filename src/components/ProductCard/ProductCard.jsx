import React from "react";
import "./ProductCard.css";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({
  id,
  img,
  name,
  description,
  price,
  discount,
  rating,
  setCartItems
}) => {
  const handleAddToCart = () => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === id);
      if (existingItem) {
        return prevItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevItems, { id, name, price, image: img, quantity: 1 }];
    });
  };

  return (
    <div className="product-card">
      {discount > 0 && <span className="badge">NEW</span>}
      <div className="img-container"><img src={img} alt={name} /></div>
      <div className="product-info">
        <div className="name-rating">
          <h2>{name}</h2>
          <div className="rating"><FaStar /><span>{rating}</span></div>
        </div>
        <p className="description">{description}</p>
      </div>
      <div className="bottom-row">
        <p className="price"><span className="price-label">Price:</span> ${price.toFixed(2)}</p>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart <FaShoppingCart /></button>
      </div>
    </div>
  );
};

export default ProductCard;
