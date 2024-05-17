import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Reviews from './pages/Reviews/Reviews';
import ReviewDetail from './pages/ReviewDetail/ReviewDetail';
import Login from './pages/Login/Login';
import SearchResults from './pages/SearchResults/SearchResults';
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
          </Routes>
        </main>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
