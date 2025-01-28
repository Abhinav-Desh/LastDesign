import React, { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../src/Sidebar.tsx';
import './App.css';
import MainPage from './MainPage.tsx';
import { useLocation } from 'react-router-dom';
function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const Location = useLocation();
  const endpoints = Location.pathname.split("/")[1]
  // console.log("toggleMenu in App:", toggleMenu); // Log to see if toggleMenu is passed correctly

  return (
    <div className="App">
      <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} endpoints={endpoints} />
      <MainPage activeIndex={activeIndex} setActiveIndex={setActiveIndex} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </div>
  );
}


export default App;
