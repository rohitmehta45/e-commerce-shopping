import React from 'react';
import './Home.css';
import { FaFire } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import bgImage from '../../assets/bgImage.png';
import Product from '../../Pages/Product/Product';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import Journey from '../../components/Journey/Journey';

const Home = () => {
  return (
    <div className="home-container-wrapper">
      
      <div id="home" className="home-container">
        <div className="left-container">
          
          <span>
            <FaFire /> New Summer Collection
          </span>

          <div className="description">
            <h1>Discover Quality</h1>
            <h1>Products at the</h1>
            <h1>Best Prices</h1>
            <p>
              Curated collections for your modern lifestyle. Elevate your home
              and style with our hand-picked selection of premium goods.
            </p>
          </div>

          <div className="buttons">
            <Link to="/products" className="shop-now-btn">
              Shop Now
            </Link>

            <a href="#products" className="view-collections-btn">
              View Collections
            </a>
          </div>

          <div className="services-list">
            <ul>
              <li><FaRegCircleCheck /> Free Shipping</li>
              <li><FaRegCircleCheck /> 24/7 Support</li>
            </ul>
          </div>
        </div>

        <div className="right-container">
          <img src={bgImage} alt="Hero Banner" />
        </div>
      </div>

      <div className="companies-list">
        <h2>Trusted by Modern Brands</h2>
        <ul>
          <li>Himalayan Outfitters</li>
          <li>Kailash Apparel</li>
          <li>Everest Clothing</li>
          <li>Namaste Wear</li>
          <li>Urban Nepali</li>
        </ul>
      </div>

      <div id="products">
        <Product />
      </div>

      <Journey />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
