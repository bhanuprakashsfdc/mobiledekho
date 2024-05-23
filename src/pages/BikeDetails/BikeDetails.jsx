import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BikeDetails.css';
import { bikes } from '../../data/bikes'; // Ensure correct import
import Reviews from '../../components/Reviews/Reviews'; // Import Reviews component
import ReviewForm from '../../components/ReviewForm/ReviewForm'; // Import ReviewForm component
import BookingForm from '../../components/BookingForm/BookingForm'; // Import BookingForm component

const BikeDetails = ({ user }) => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);
  const [wishlistAdded, setWishlistAdded] = useState(false);

  useEffect(() => {
    const bikeData = bikes.find((bike) => bike.id === parseInt(id));
    setBike(bikeData);
  }, [id]);

  const addToWishlist = async () => {
    const response = await fetch(`https://api.example.com/users/${user.id}/wishlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bikeId: bike.id }),
    });
    if (response.ok) {
      setWishlistAdded(true);
    }
  };

  if (!bike) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bike-details">
      <div className="bike-details-header">
        <img src={bike.image} alt={bike.name} />
        <h1>{bike.name}</h1>
        {user && !wishlistAdded && (
          <button onClick={addToWishlist}>Add to Wishlist</button>
        )}
        {wishlistAdded && <p>Added to Wishlist</p>}
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
      <Reviews reviews={bike.reviews} /> {/* Display reviews */}
      <ReviewForm bikeId={id} addReview={(review) => {
        setBike((prevBike) => ({
          ...prevBike,
          reviews: [...prevBike.reviews, review],
        }));
      }} /> {/* Form to submit new reviews */}
      <BookingForm bikeId={id} bikeName={bike.name} /> {/* Form to book a test ride or purchase */}
    </div>
  );
};

export default BikeDetails;
