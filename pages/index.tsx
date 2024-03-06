import React, { useState } from 'react';
import Navbar from '../pages/NavBar';
import Login from "../pages/LoginPage";
import MainSection from "../pages/MainSection";
// import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="w-full px-8 min-h-[100vh] flex-col justify-center">
      <Navbar />
        <MainSection />
    </div>
  );
}; 

export default App;