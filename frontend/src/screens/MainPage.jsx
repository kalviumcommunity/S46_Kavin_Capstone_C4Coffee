import React from 'react'
import Navbar from '../components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Footer from '../components/Footer';

function MainPage() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default MainPage