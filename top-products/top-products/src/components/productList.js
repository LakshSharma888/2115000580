import React from 'react';
import ProductCard from './productCard';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} id={index} />
      ))}
    </div>
  );
};

export default ProductList;
