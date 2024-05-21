import React from 'react';
import { Link } from 'react-router-dom';
import './BikeCard.css';

const BikeCard = ({id,image, name, description }) => {
  return (
    <div className="bike-card">
      <Link to={`/bike/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default BikeCard;
