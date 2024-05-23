import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Comparison.css';
import { bikes } from '../../data/bikes'; 

const Comparison = ({ bikeIds }) => {
  const [comparedBikes, setComparedBikes] = useState([]);

  useEffect(() => {
    const fetchBikes = async () => {
      // Assuming bikeIds is an array of bike IDs passed as a prop
      const results = bikes.filter((bike) => bikeIds.includes(bike.id));
      setComparedBikes(results);
    };
    fetchBikes();
  }, [bikeIds]);

  if (comparedBikes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="comparison">
      <h2>Bike Comparison</h2>
      <div className="comparison-table">
        {comparedBikes.map((bike) => (
          <div key={bike.id} className="comparison-column">
            <img src={bike.image} alt={bike.name} />
            <h3>{bike.name}</h3>
            <ul>
              <li>Engine: {bike.specifications.engine}</li>
              <li>Power: {bike.specifications.power}</li>
              <li>Torque: {bike.specifications.torque}</li>
              <li>Mileage: {bike.specifications.mileage}</li>
              <li>Price: {bike.specifications.price}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparison;
