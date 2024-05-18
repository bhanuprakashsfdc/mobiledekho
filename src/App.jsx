import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* Components */
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
/* Pages */
import Home from './pages/Home/Home';
import Reviews from './pages/Reviews/Reviews';
import ReviewDetail from './pages/ReviewDetail/ReviewDetail';
import Login from './pages/Login/Login';
import SearchResults from './pages/SearchResults/SearchResults';

import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Terms from './pages/Terms/Terms'
import Privacy from './pages/Privacy/Privacy'
import Feedback from './pages/Feedback/Feedback'


import './App.css';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Header />
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/review/:id" element={<ReviewDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<SearchResults />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/feedback" element={<Feedback />} />

          </Routes>
        </main>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
