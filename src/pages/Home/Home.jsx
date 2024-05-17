import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className="main-content">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MobileDekho</h1>
          <p>Your one-stop destination for all things bikes and scooters.</p>
        </div>
      </section>
      <section className="featured">
        <h2>Featured Bikes</h2>
        <div className="bike-list">
          {/* Add bike cards here */}
        </div>
      </section>
    </main>
  );
};

export default Home;
