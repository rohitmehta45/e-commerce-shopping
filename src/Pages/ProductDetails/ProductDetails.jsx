import React, { useState } from 'react';
import './ProductDetails.css';
import { CiSearch } from "react-icons/ci";
import { MdOutlineSort } from "react-icons/md";
import ProductCard from '../../components/ProductCard/ProductCard';
import productsData from '../../data/Product';
import logoImg from '../../assets/logo.png';

const ProductDetails = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortOption, setSortOption] = useState('Featured');
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setVisibleCount(8);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setVisibleCount(8);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange({ ...priceRange, [name]: value });
    setVisibleCount(8);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setSortDropdownOpen(false);
  };

  let filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      (selectedCategory === 'Price Range'
        ? (priceRange.min === '' || product.price >= Number(priceRange.min)) &&
          (priceRange.max === '' || product.price <= Number(priceRange.max))
        : product.category === selectedCategory);

    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (sortOption === 'Price: Low → High') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'Price: High → Low') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'Rating: High → Low') {
    filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, filteredProducts.length));
  };

  return (
    <div className='details-container'>
      <div className="header-container">
        <h1>Our Products</h1>
        <p>Explore our latest collection of premium items designed for your lifestyle.</p>

        <div className="categories-container">
          <div className="left-items">
            <div className="search-box">
              <CiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search Products..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div className="right-items">
            {['All', 'Electronics', 'Fashion'].map((cat) => (
              <button
                key={cat}
                className={selectedCategory === cat ? 'active-category' : ''}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}

            <div className="dropdown-category">
              <button
                className={selectedCategory === 'Price Range' ? 'active-category' : ''}
                onClick={() => handleCategoryClick('Price Range')}
              >
                Price Range
              </button>
              {selectedCategory === 'Price Range' && (
                <div className="price-dropdown">
                  <input
                    type="number"
                    name="min"
                    placeholder="Min Price"
                    value={priceRange.min}
                    onChange={handlePriceChange}
                  />
                  <input
                    type="number"
                    name="max"
                    placeholder="Max Price"
                    value={priceRange.max}
                    onChange={handlePriceChange}
                  />
                </div>
              )}
            </div>

            <div className="sort-dropdown">
              <button
                className="sort-btn"
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              >
                Sort by: {sortOption} <MdOutlineSort className="sort-icon"/>
              </button>
              {sortDropdownOpen && (
                <div className="sort-options">
                  {['Featured', 'Price: Low → High', 'Price: High → Low', 'Rating: High → Low'].map(option => (
                    <div key={option} className="sort-option" onClick={() => handleSortChange(option)}>
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More Products
          </button>
        </div>
      )}

      <footer className="products-footer">
        <div className="footer-left">
          <img src={logoImg} alt="Logo" className="footer-logo" />
          <span className="footer-name">ShopEase</span>
        </div>
        <div className="footer-right">
          © {new Date().getFullYear()} ShopEase. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default ProductDetails;
