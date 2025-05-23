// src/assets/components/SimilarProducts.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './SimilarProducts.css';

const SimilarProducts = ({ currentProduct, products }) => {
  const similar = products.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id
  );

  return (
    <div className="similar-products">
      <h2>Similar Products</h2>
      {similar.length > 0 ? (
        <div className="similar-slider">
          {similar.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="similar-card">
              <img src={item.image} alt={item.name} />
              <div className="similar-info">
                <p>{item.name}</p>
                <span>₦{item.price.toLocaleString()}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="no-similar">No similar products found.</p>
      )}
    </div>
  );
};

export default SimilarProducts;
