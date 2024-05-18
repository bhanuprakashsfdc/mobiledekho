import React from 'react'
import './WebStories.css'

const WebStories = ({ image, title, description }) => {
  return (
    <div className="story-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default WebStories;