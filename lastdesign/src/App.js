import React from 'react';
import { useState } from 'react';
import Sidebar from '../src/Sidebar.tsx';
import './App.css';
import MainPage from './MainPage.tsx';

function App() {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="App">
      <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <MainPage activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
}

export default App;
