import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CarsListing from '../pages/CarsListing';
import CarsDetails from '../pages/CarsDetails';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import NotFound from '../pages/NotFound';
import Contacts from '../pages/Contacts';
import LoginSignup from '../pages/LoginSignup';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarsListing />} />
      <Route path="/cars/:slug" element={<CarsDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contacts/>} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/loginsignup" element={<LoginSignup/>} />
    </Routes>
  );
};

export default Routers;
