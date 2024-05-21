import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BikeDetails.css';
import { bikes } from '../../data/bikes'; // Import mock data

const BikeDetails = () => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);

  useEffect(() => {
    // Fetch bike details from mock data
/*
    const fetchBikeDetails = async () => {
      const bikeData = bikes.find((bike) => bike.id === parseInt(id));
      setBike(bikeData);
    };
    fetchBikeDetails();
  }, [id]);
*/
    const bikeData = bikes.find((bike) => bike.id === parseInt(id));
    setBike(bikeData);
    }, [id]);
  if (!bike) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bike-details">
      <div className="bike-details-header">
        <img src={bike.image} alt={bike.name} />
        <h1>{bike.name}</h1>
      </div>
      <div className="bike-specifications">
        <h2>Specifications</h2>
        <ul>
          <li>Engine: {bike.specifications.engine}</li>
          <li>Power: {bike.specifications.power}</li>
          <li>Torque: {bike.specifications.torque}</li>
          <li>Mileage: {bike.specifications.mileage}</li>
          <li>Price: {bike.specifications.price}</li>
        </ul>
      </div>
      <div className="bike-reviews">
        <h2>Reviews</h2>
        {bike.reviews.map((review, index) => (
          <div key={index} className="review">
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
      <div className="related-bikes">
        <h2>Related Bikes</h2>
        <div className="related-bikes-list">
          {bike.relatedBikes.map((relatedBike, index) => (
            <div key={index} className="related-bike-card">
              <img src={relatedBike.image} alt={relatedBike.name} />
              <h3>{relatedBike.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
