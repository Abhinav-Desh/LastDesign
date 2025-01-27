import React from 'react';
import { useState } from 'react';
import Sidebar from '../src/Sidebar.tsx';
import './App.css';
import MainPage from './MainPage.tsx';

function App() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [togglemenu,setToggleMenu] = useState(false);
    // console.log(togglemenu)
  return (
    <div className="App">
      <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} togglemenu={togglemenu} setToggleMenu={setToggleMenu}/>
      <MainPage activeIndex={activeIndex} setActiveIndex={setActiveIndex} togglemenu={togglemenu} setToggleMenu={setToggleMenu} />
    </div>
  );
}

export default App;
