import React from 'react';
import './BikeNews.css';

const BikeNews = ({ image, title, description, author, date }) => {
    return (
        <div className="news-card">
            <div className="news-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="news-card-content">
                <h3>{title}</h3>
                <p className="news-description">{description}</p>
                <div className="news-meta">
                <div className="news-author">
                    <span className="author-initial">{author.charAt(0)}</span>
                    <span>{author}</span>
                </div>
                <span className="news-date">{date}</span>
                </div>
            </div>
        </div>
    );
  };

export default BikeNews;