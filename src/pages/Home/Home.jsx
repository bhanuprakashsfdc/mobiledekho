import React from 'react';
import './Home.css';
/* Importing other components */
import BikeCard from '../../components/BikeCard/BikeCard';
/* Images Importing */
import splender from '../../assets/images/hero/hero-splender.jpeg'
import mt15 from '../../assets/images/yamaha/yamaha_mt_15.jpeg'
import classic350 from '../../assets/images/royal_enfield/classic_350.jpeg'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Bike</h1>
          <p>Explore the best bikes and scooters in the market.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
      <section className="spotlight">
        <h2>Bikes in Spotlight</h2>
        <div className="bike-list">
        <BikeCard
            image={splender}
            name="Hero Splender"
            description="Details about ."
          />
          <BikeCard
            image={mt15}
            name="Bike 2"
            description="Details about ."
          />
          <BikeCard
            image={classic350}
            name="Bike 3"
            description="Details about Bike 3."
          />
          <BikeCard
            image={classic350}
            name="Bike 3"
            description="Details about Bike 3."
          />
        </div>
      </section>
      <section className="electric-zone">
        <h2>Electric Zone</h2>
        <div className="electric-list">
          {/* Electric bike/scooter cards go here */}
        </div>
      </section>
      <section className="latest-bikes">
        <h2>Latest Bikes</h2>
        <div className="latest-list">
          {/* Latest bike cards go here */}
        </div>
      </section>
      <section className="test-rides">
        <h2>Test Rides Available</h2>
        <div className="test-ride-list">
          {/* Test ride bike cards go here */}
        </div>
      </section>
      <section className="upcoming-bikes">
        <h2>Upcoming Bikes</h2>
        <div className="upcoming-list">
          {/* Upcoming bike cards go here */}
        </div>
      </section>
      <section className="popular-comparisons">
        <h2>Popular Comparisons</h2>
        <div className="comparison-list">
          {/* Comparison cards go here */}
        </div>
      </section>
      <section className="second-hand-bikes">
        <h2>Trusted Second Hand Bikes by Budget</h2>
        <div className="second-hand-list">
          {/* Second hand bike cards go here */}
        </div>
      </section>
      <section className="bike-news">
        <h2>Bike News</h2>
        <div className="news-list">
          {/* News articles go here */}
        </div>
      </section>
      <section className="web-stories">
        <h2>Web Stories</h2>
        <div className="stories-list">
          {/* Web stories go here */}
        </div>
      </section>
    </div>
  );
};

export default Home;
