import React from 'react';
import '../Filter/Filter.css';

const PriceFilter = ({ selectedPrice, setSelectedPrice, priceRanges }) => {
  return (
    <div className="filter">
      <h3>Price</h3>
      <select
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
      >
        <option value="">All Prices</option>
        {priceRanges.map((range, index) => (
          <option key={index} value={range}>
            {range}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
