import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import Dashboard from '../src/components/Dashboard.tsx';  
import TableView from '../src/components/TableView.tsx';
import Receipt from '../src/components/Receipt.tsx';
import Notifications from '../src/components/Notifications.tsx';
import Person from '../src/components/Person.tsx';
import SignUp from '../src/components/Logout.tsx';
import Navbar from "./components/Navbar.tsx";

interface MainPageProps {
  activeIndex: any;
  setActiveIndex: any;
  toggleMenu: any;
  setToggleMenu: any;
}

const MainPage: React.FC<MainPageProps> = ({ activeIndex, setActiveIndex, toggleMenu, setToggleMenu }) => {
  const [scrollheight,setScrollHeight] = useState(0);
  const scrollfunction = (e:any) =>{
    // setScrollHeight(window.scrollY+1)
    console.log(e)
  }
  return (
    <div className="main-page" style={{ backgroundColor: '#eeeeee' }} onScroll={(e)=>{scrollfunction(e)}}>
     
      <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tables" element={<TableView />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Person />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default MainPage;
