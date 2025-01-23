import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/Assets/logo-white.svg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableViewIcon from "@mui/icons-material/TableView";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import FormatTextdirectionRToLIcon from "@mui/icons-material/FormatTextdirectionRToL";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = ({activeIndex,setActiveIndex}) => {
 

  const navlist = [
    
    "Dashboard",
    "Tables",
    "Receipt",
    "RtoL",
    "Notification",
    "Profile",
    "Sign-In",
    "Sign-Up",
  ];

  const navIcon = [
    <DashboardIcon />,
    <TableViewIcon />,
    <ReceiptLongIcon />,
    <FormatTextdirectionRToLIcon />,
    <NotificationsIcon />,
    <PersonIcon />,
    <ExitToAppIcon />,
    <LogoutIcon />,
  ];


  const handleClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className="dashboard-heading">
          <img src={logo} alt="" height={"40px"} width={"40px"} />
          <div style={{ fontSize: "20px", fontWeight: "600", color: "white" }}>
            Dashboard
          </div>
        </div>
        <div className="nav-options">
          {navlist.map((ele, index) => (
            <div key={index}>
              <NavLink
                to={`/${ele.toLowerCase()}`} 
                className={`nav ${index === activeIndex ? "active" : ""}`} 
                onClick={() => handleClick(index)} 
              >
                <div className="icon">{navIcon[index]}</div>
                <div className="text" >{ele}</div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
