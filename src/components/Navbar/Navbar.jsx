import React, { useState } from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Cart from "../../Pages/Cart/Cart";

const Navbar = ({ cartCount = 3 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <HashLink smooth to="/#home" className="logo-link">
            <img src={logoImg} alt="Logo" />
            <h2 className="logo">ShopEase</h2>
          </HashLink>
        </div>

        <div className={`nav-middle ${mobileMenuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li><HashLink smooth to="/#home">Home</HashLink></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="nav-right">
          <button className="icon-btn"><CiSearch /></button>

          <button
            className="cart-container"
            onClick={() => setCartOpen(true)}
            type="button"
          >
            <IoCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button className="hamburger-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
    </>
  );
};

export default Navbar;
