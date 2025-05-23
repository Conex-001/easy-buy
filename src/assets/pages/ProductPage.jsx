import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import PRODUCTS from "../../data/products";
import "./ProductPage.css";
import SimilarProducts from "../components/SimilarProducts"; // ✅ Already correctly imported

const ProductPage = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addToCart } = useCart();

  // ✅ Make sure we check if product exists
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">₦{product.price.toLocaleString()}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>

      {/* ✅ Show similar products below */}
      <SimilarProducts currentProduct={product} products={PRODUCTS} />
    </div>
  );
};

export default ProductPage;
