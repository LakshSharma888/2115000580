import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTopProducts } from '../api';
import ProductDetails from '../components/productDetails';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchTopProducts('ANZ', 'Laptop', 1, 10000);
      setProduct(data[id]);
    };
    getProduct();
  }, [id]);

  return <div className="product-page">{product && <ProductDetails product={product} />}</div>;
};

export default ProductPage;
