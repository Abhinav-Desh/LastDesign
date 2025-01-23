import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Dashboard from '../src/components/Dashboard.tsx';  
import TableView from '../src/components/TableView.tsx';
import Receipt from '../src/components/Receipt.tsx';
import Notifications from '../src/components/Notifications.tsx';
import Person from '../src/components/Person.tsx';
import SignUp from '../src/components/Logout.tsx';

const MainPage = () => {
  return (
    <div className="main-page" style={{backgroundColor:'#eeeeee'}}>

      {/* make navbar header */}
      <Routes>
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
