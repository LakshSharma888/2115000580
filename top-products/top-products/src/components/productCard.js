import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, id }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={`https://via.placeholder.com/150?text=${product.productName}`} alt={product.productName} />
        <h2>{product.productName}</h2>
        <p>Company: {product.company}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Discount: {product.discount}%</p>
        <p>Availability: {product.availability}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
