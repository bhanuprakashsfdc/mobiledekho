import React from 'react';
import './Reviews.css';

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
