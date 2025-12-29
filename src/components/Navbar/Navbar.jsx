import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { IoCart } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import logoImg from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import AuthModal from '../../components/AuthModal/AuthModal';
import { auth, logout } from '../../firebase';

const Navbar = ({ cartItems = [] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState("login");
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const openLogin = () => {
    setAuthType("login");
    setAuthModalOpen(true);
  };

  const handleLogout = async () => {
    await logout();
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <HashLink smooth to="/#home" className="logo-link">
            <img src={logoImg} alt="Logo" />
            <h2 className="logo">ShopEase</h2>
          </HashLink>
        </div>

        {user && (
          <div className={`nav-middle ${mobileMenuOpen ? "active" : ""}`}>
            <ul className="nav-links">
              <li>
                <HashLink smooth to="/#home" className="nav-item">Home</HashLink>
              </li>
              <li>
                <NavLink to="/products" className="nav-item">Products</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-item">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-item">Contact</NavLink>
              </li>
            </ul>
          </div>
        )}

        <div className="nav-right">
          {!user && (
            <button className="login-btn" onClick={openLogin}>Login</button>
          )}

          {user && (
            <div className="profile-container">
              <div
                className="profile-circle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {user.email[0].toUpperCase()}
              </div>
              {dropdownOpen && (
                <div className="profile-dropdown">
                  <NavLink to="/profile" className="profile-item" onClick={() => setDropdownOpen(false)}>
                    Profile / Settings
                  </NavLink>
                  <NavLink to="/dashboard" className="profile-item" onClick={() => setDropdownOpen(false)}>
                    Orders / Dashboard
                  </NavLink>
                  <NavLink to="/help" className="profile-item" onClick={() => setDropdownOpen(false)}>
                    Help / Support
                  </NavLink>
                  <div className="profile-item logout-item" onClick={handleLogout}>
                    Sign Out
                  </div>
                </div>
              )}
            </div>
          )}

          <button className="cart-container">
            <IoCart />
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </button>

          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {authModalOpen && (
        <AuthModal
          type={authType}
          setType={setAuthType}
          closeModal={() => setAuthModalOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
