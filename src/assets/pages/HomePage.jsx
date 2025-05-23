import React from "react";
import { Link } from "react-router-dom";
import PRODUCTS from "../../data/products";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Discover Top Tech Deals</h1>
          <p>Shop premium gadgets & accessories at unbeatable prices.</p>
          <Link to="/products" className="shop-now-btn">Shop Now</Link>
        </div>
      </section>

      <section className="featured-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {PRODUCTS.slice(0, 6).map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="price">₦{product.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
