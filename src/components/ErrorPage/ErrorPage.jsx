import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home'

const ErrorPage = () => {
    <Router>
        return (
            <Routes>
                <div>Error 404 - Page Not Found</div>
                <Route path="/" element={<Home />} />
            </Routes>
        )
   </Router>
}

export default ErrorPage