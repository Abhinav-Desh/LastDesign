import React, { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../src/Sidebar.tsx';
import './App.css';
import MainPage from './MainPage.tsx';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

  // console.log("toggleMenu in App:", toggleMenu); // Log to see if toggleMenu is passed correctly

  return (
    <div className="App">
      <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <MainPage activeIndex={activeIndex} setActiveIndex={setActiveIndex} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </div>
  );
}


export default App;
