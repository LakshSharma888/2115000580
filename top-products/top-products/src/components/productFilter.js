import React from 'react';

const ProductFilter = ({ categories, companies, onFilterChange }) => {
  return (
    <div className="product-filter">
      <select onChange={(e) => onFilterChange('category', e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select onChange={(e) => onFilterChange('company', e.target.value)}>
        <option value="">All Companies</option>
        {companies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>
      <select onChange={(e) => onFilterChange('availability', e.target.value)}>
        <option value="">All Availability</option>
        <option value="yes">In Stock</option>
        <option value="out-of-stock">Out of Stock</option>
      </select>
      <select onChange={(e) => onFilterChange('sort', e.target.value)}>
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
      </select>
    </div>
  );
};

export default ProductFilter;
