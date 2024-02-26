import React, { useState } from 'react';
import styles from "../components/index.module.css"
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