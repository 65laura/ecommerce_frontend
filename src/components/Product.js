import React from 'react';
import './Product.css';
import placeholderImage from '../assets/placeholder.png';

const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <img src={placeholderImage} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>Category: {product.productCategory}</p>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
