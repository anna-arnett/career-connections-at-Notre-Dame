import React, { useState } from 'react';
import Navbar from '../pages/NavBar';
import Login from "../pages/LoginPage";
import MainSection from "../pages/MainSection";
// import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
        <MainSection />
    </div>
  );
}; 

export default App;