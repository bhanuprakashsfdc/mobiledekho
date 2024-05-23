import React, { useState, useEffect } from 'react';
import './Home.css';
/* Importing other components */
import Header from '../../components/Header/Header'
import BikeCard from '../../components/BikeCard/BikeCard';
import StoryCard from '../../components/WebStories/WebStories';
import NewsCard from '../../components/BikeNews/BikeNews';
import Pagination from '../../components/Pagination/Pagination';

/* Images Importing */
import splender from '../../assets/images/hero/hero-splender.jpeg'
import mt15 from '../../assets/images/yamaha/yamaha_mt_15.jpeg'
import classic350 from '../../assets/images/royal_enfield/classic_350.jpeg'
/* For Electric images */
import s1 from '../../assets/images/electric/ola/s1pro.jpeg';
import iqube from '../../assets/images/electric/tvs/iqube.jpeg';
import x450 from '../../assets/images/electric/ather/450.jpeg';
import chetak from '../../assets/images/electric/bajaj/chetak.jpeg';
/* Importing mock data */
import {bikes} from '../../data/bikes';

const Home = ({ user, setUser }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const bikesPerPage = 4; // Number of bikes to display per page

  useEffect(() => {
    const handleSearch = (query) => {
      if (query) {
        const results = bikes.filter((bike) =>
          bike.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
      } else {
        setSearchResults(bikes);
      }
    };

    handleSearch(searchQuery);
  }, [searchQuery]);

  const totalPages = Math.ceil(searchResults.length / bikesPerPage);

  const currentBikes = searchResults.slice(
    (currentPage - 1) * bikesPerPage,
    currentPage * bikesPerPage
  );

  return (
    <div className="home">
      <Header setSearchQuery={setSearchQuery} user={user} setUser={setUser} />
        <section className="hero">
          <div className="hero-content">
            <h1>Find Your Dream Bike</h1>
            <p>Explore the best bikes and scooters in the market.</p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>
        <div className="home-grid">
        {searchQuery && (
        <section className="search-results">
          <h2>Search Results</h2>
          <div className="bike-list">
              {searchResults.map((bike) => (
                <BikeCard
                key={bike.id}
                id={bike.id}
                image={bike.image}
                name={bike.name}
                description={bike.description}
                />
              ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>
      )}
        <section className="spotlight">
          <h2>Bikes in Spotlight</h2>
          <div className="bike-list">
          {currentBikes.map((bike) => (
              <BikeCard
                key={bike.id}
                id={bike.id}
                image={bike.image}
                name={bike.name}
                description={bike.description}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>
        <section className="electric-zone">
          <h2>Electric Zone</h2>
          <div className="bike-list">
            {bikes.filter((bike) => bike.name.toLowerCase().includes('electric')).map((bike) => (
              <BikeCard
                key={bike.id}
                id={bike.id}
                image={bike.image}
                name={bike.name}
                description={bike.description}
              />
            ))}
            </div>
        </section>
        <section className="latest-bikes">
          <h2>Latest Bikes</h2>
          <div className="bike-list">
              {bikes.filter((bike) => bike.name.toLowerCase().includes('latest')).map((bike) => (
                <BikeCard
                  key={bike.id}
                  id={bike.id}
                  image={bike.image}
                  name={bike.name}
                  description={bike.description}
                />
              ))}
          </div>
        </section>
        <section className="test-rides">
          <h2>Test Rides Available</h2>
          <div className="bike-list">
              {bikes.filter((bike) => bike.name.toLowerCase().includes('test')).map((bike) => (
                <BikeCard
                  key={bike.id}
                  id={bike.id}
                  image={bike.image}
                  name={bike.name}
                  description={bike.description}
                />
              ))}
          </div>
        </section>
        <section className="upcoming-bikes">
          <h2>Upcoming Bikes</h2>
          <div className="bike-list">
            {bikes.filter((bike) => bike.name.toLowerCase().includes('upcoming')).map((bike) => (
              <BikeCard
                key={bike.id}
                id={bike.id}
                image={bike.image}
                name={bike.name}
                description={bike.description}
              />
            ))}
          </div>
        </section>
        <section className="popular-comparisons">
          <h2>Popular Comparisons</h2>
          <div className="comparison-list">
            {bikes.filter((bike) => bike.name.toLowerCase().includes('comparison')).map((bike) => (
              <BikeCard
                key={bike.id}
                id={bike.id}
                image={bike.image}
                name={bike.name}
                description={bike.description}
              />
            ))}
          </div>
        </section>
        <section className="second-hand-bikes">
          <h2>Trusted Second Hand Bikes by Budget</h2>
          <div className="second-hand-list">
            {bikes.filter((bike) => bike.name.toLowerCase().includes('secondhand')).map((bike) => (
              <BikeCard
                key={bike.id}
                id={bike.id}
                image={bike.image}
                name={bike.name}
                description={bike.description}
              />
            ))}
          </div>
        </section>
        <section className="bike-news">
          <h2>Bike News</h2>
          <div className="news-list">
            <NewsCard
              image={s1}
              title="Bike News 1"
              description="Details about Bike News 1."
              author="Irfan"
              date="May 18, 2024"
            />
            <NewsCard
              image={iqube}
              title="Bike News 2"
              description="Details about Bike News 2."
              author="Soham"
              date="May 17, 2024"
            />
            <NewsCard
              image={x450}
              title="Bike News 3"
              description="Details about Bike News 3."
              author="Irfan"
              date="May 17, 2024"
            />
            <NewsCard
              image={chetak}
              title="Bike News 3"
              description="Details about Bike News 3."
              author="Irfan"
              date="May 17, 2024"
            />
          </div>
        </section>
        <section className="web-stories">
          <h2>Web Stories</h2>
          <div className="stories-list">
            <StoryCard
              image="story1.jpg"
              title="Web Story 1"
              description="Details about Web Story 1."
            />
            <StoryCard
              image="story2.jpg"
              title="Web Story 2"
              description="Details about Web Story 2."
            />
            <StoryCard
              image="story3.jpg"
              title="Web Story 3"
              description="Details about Web Story 3."
            />
            <StoryCard
              image="story3.jpg"
              title="Web Story 3"
              description="Details about Web Story 3."
            />
            <StoryCard
              image="story3.jpg"
              title="Web Story 3"
              description="Details about Web Story 3."
            />
            <StoryCard
              image="story3.jpg"
              title="Web Story 3"
              description="Details about Web Story 3."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
