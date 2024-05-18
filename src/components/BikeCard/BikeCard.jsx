import React from 'react';
import './BikeCard.css';

const BikeCard = ({ image, name, description }) => {
  return (
    <div className="bike-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BikeCard;
