import React, { useState, useEffect } from 'react';
import { fetchTopProducts } from '../api';
import ProductList from '../components/productList';
import ProductFilter from '../components/productFilter';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    availability: '',
    sort: '',
  });

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchTopProducts(filters.company || 'ANZ', filters.category || 'Laptop', 1, 10000);
      setProducts(data);
    };
    getProducts();
  }, [filters]);

  const handleFilterChange = (type, value) => {
    setFilters({ ...filters, [type]: value });
  };

  return (
    <div className="all-products-page">
      <ProductFilter
        categories={['Phone', 'Computer', 'TV', 'Earphone', 'Tablet', 'Charger', 'House', 'Keypad', 'Bluetooth', 'Pendrive', 'Remote', 'Speaker', 'Headset', 'Laptop', 'PC']}
        companies={['ANZ', 'FLP', 'SP', 'HYN', 'AZO']}
        onFilterChange={handleFilterChange}
      />
      <ProductList products={products} />
    </div>
  );
};

export default AllProductsPage;
