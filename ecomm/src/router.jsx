import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from "./components/pages/about/About";
import Home from "./components/pages/Home/Home";
import Custom from "./components/pages/Custom/Custom";
import Bag from "./components/pages/Bag/Bag";
import Wishlist from "./components/pages/wishlist/Wishlist";
import Error from "./components/pages/error/Error";
import LoginForm from './components/pages/Login/LoginForm';
import Signup from './components/pages/signup/signup';



const router = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Custom" element={<Custom />} />
    <Route path="/Bag" element={<Bag />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/About" element={<About />} />
    <Route path="/Login" element={<LoginForm/>} />
    <Route path="/Signup" element={<Signup/>} />
    {/* Add more routes if needed */}
    <Route path="*" element={<Error />} />
  </Routes>
);

export default router;
