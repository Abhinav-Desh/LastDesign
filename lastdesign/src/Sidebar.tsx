import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router-dom";
import { concat } from "lodash";

interface SidebarProps {
  activeIndex: any;
  setActiveIndex:any;
  toggleMenu: any;
  setToggleMenu:any;
  endpoints:any;
}


const Sidebar :React.FC<SidebarProps> = ({activeIndex,setActiveIndex,toggleMenu,setToggleMenu,endpoints}) => {
 
const location = useLocation();

  
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
 console.log(endpoints,"endpoints")

  
  const handleClick = (route: any) => {
    setActiveIndex(route);
  };
  console.log(window.location.pathname.split("/").pop(),'--->')
  
  return (
    <>
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
                to={`/${ele.toLowerCase().replace(/-+_/,"")}`} 
                className={`nav ${ele === activeIndex ? "active" : ""}`} 
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


        {toggleMenu && (
          <div className="sidebar2-container">
           <div className="sidebar2-content">
        <div className="dashboard2-heading">
          <img src={logo} alt="" height={"40px"} width={"40px"} />
          <div style={{ fontSize: "20px", fontWeight: "600", color: "white" }}>
            Dashboard
          </div>
        </div>
        <div className="nav2-options">
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
        )}
    </>
    
  );
};

export default Sidebar;
