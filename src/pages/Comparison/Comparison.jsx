import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Comparison.css';
import { bikes } from '../../data/bikes'; 

const Comparison = () => {
  const [searchParams] = useSearchParams();
  const [bike1, setBike1] = useState(null);
  const [bike2, setBike2] = useState(null);

  useEffect(() => {
    const bike1Id = searchParams.get('bike1');
    const bike2Id = searchParams.get('bike2');

    if (bike1Id) {
      const bike1Data = bikes.find((bike) => bike.id === parseInt(bike1Id));
      setBike1(bike1Data);
    }

    if (bike2Id) {
      const bike2Data = bikes.find((bike) => bike.id === parseInt(bike2Id));
      setBike2(bike2Data);
    }
  }, [searchParams]);

  if (!bike1 || !bike2) {
    return <div>Loading...</div>;
  }

  return (
    <div className="comparison">
      <h2>Bike Comparison</h2>
      <div className="comparison-table">
        <div className="comparison-row">
          <div className="comparison-cell">
            <h3>{bike1.name}</h3>
            <img src={bike1.image} alt={bike1.name} />
          </div>
          <div className="comparison-cell">
            <h3>{bike2.name}</h3>
            <img src={bike2.image} alt={bike2.name} />
          </div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">
            <h4>Engine</h4>
            <p>{bike1.specifications.engine}</p>
          </div>
          <div className="comparison-cell">
            <h4>Engine</h4>
            <p>{bike2.specifications.engine}</p>
          </div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">
            <h4>Power</h4>
            <p>{bike1.specifications.power}</p>
          </div>
          <div className="comparison-cell">
            <h4>Power</h4>
            <p>{bike2.specifications.power}</p>
          </div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">
            <h4>Torque</h4>
            <p>{bike1.specifications.torque}</p>
          </div>
          <div className="comparison-cell">
            <h4>Torque</h4>
            <p>{bike2.specifications.torque}</p>
          </div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">
            <h4>Mileage</h4>
            <p>{bike1.specifications.mileage}</p>
          </div>
          <div className="comparison-cell">
            <h4>Mileage</h4>
            <p>{bike2.specifications.mileage}</p>
          </div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">
            <h4>Price</h4>
            <p>{bike1.specifications.price}</p>
          </div>
          <div className="comparison-cell">
            <h4>Price</h4>
            <p>{bike2.specifications.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
