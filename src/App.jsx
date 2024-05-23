import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
/* Components */
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AdminPanel from './components/AdminPanel/AdminPanel';
import WishList from './components/Wishlist/Wishlist';

/* Pages */
import Home from './pages/Home/Home';
import Reviews from './pages/Reviews/Reviews';
import ReviewDetail from './pages/ReviewDetail/ReviewDetail';
import SearchResults from './pages/SearchResults/SearchResults';
import BikeDetails from './pages/BikeDetails/BikeDetails';
import Comparison from './pages/Comparison/Comparison'; 

import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Terms from './pages/Terms/Terms'
import Privacy from './pages/Privacy/Privacy'
import Feedback from './pages/Feedback/Feedback'
/* Authorisation */
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import UserProfile from './pages/UserProfile/UserProfile';
import UserManagement from './pages/UserManagement/UserManagement'; 
/* Analytics */
import { trackPageView } from './utils/analytics';

import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  /* GA Code */
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <Router>
          <div className="App">
            <main>
                <Routes>
                  <Route path="/" element={<Home user={user} setUser={setUser} />} />
                  {/*<Route path="/" element={<Home />} />*/}
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/review/:id" element={<ReviewDetail />} />
                  <Route path="/bike/:id" component={BikeDetails} />

                  <Route path="/login" element={<Login />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" element={<UserProfile user={user} setUser={setUser} />} />
                  <Route path="/comparison" element={<Comparison />} />
                  <Route path="/wishlist" element={<WishList user={user} />} />
                  
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/terms-and-conditions" element={<Terms />} />
                  <Route path="/privacy-policy" element={<Privacy />} />
                  <Route path="/feedback" element={<Feedback />} />

                  <Route path="*" element={<ErrorPage />} />
                  <Route path="/admin" element={<AdminPanel user={user} />} />
                  <Route path="/user-management" element={<UserManagement user={user} />} />
                </Routes>
              </main>
            <Footer />
          </div>
    </Router>
  );
};

export default App;
