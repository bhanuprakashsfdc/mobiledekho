import React from 'react';
import '../Filter/Filter.css';

const BrandFilter = ({ selectedBrand, setSelectedBrand, brands }) => {
  return (
    <div className="filter">
      <h3>Brand</h3>
      <select
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        <option value="">All Brands</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandFilter;
