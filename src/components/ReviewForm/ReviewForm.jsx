import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ bikeId, addReview }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { author, content };
    const response = await fetch(`https://api.example.com/bikes/${bikeId}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    });
    if (response.ok) {
      const review = await response.json();
      addReview(review);
      setAuthor('');
      setContent('');
    } else {
      alert('Failed to submit review');
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2>Leave a Review</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Review"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
