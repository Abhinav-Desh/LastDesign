import React, { useDebugValue, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import logo from "../Assets/logo-white.svg";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";

interface NavbarProps {
  activeIndex: any;
  setActiveIndex: any;
  toggleMenu: Boolean;
  setToggleMenu: any;
}

const Navbar: React.FC<NavbarProps> = ({
  activeIndex,
  setActiveIndex,
  toggleMenu,
  setToggleMenu,
}) => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];


  
  const handleToggle = () => {
    setToggleMenu((prevState)=>!prevState);
    console.log('===>',toggleMenu);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo-endpoint">
          <div className="logo">
            <HomeIcon style={{ fontSize: "20px", color: " #676565" }} />
          </div>
          <div className="endpoint">/ {currentPath || "dashboard"}</div>
        </div>
        <div className="second-child">
          <input type="text" placeholder="search here" className="search-bar" />
          <div className="person-logo">
            <AccountCircleIcon />
          </div>
          <div className="menu-icon" onClick={handleToggle}>
            {toggleMenu===false ? <MenuIcon /> : <MenuOpenIcon />}
          </div>
          <div className="settings">
            <SettingsIcon />
          </div>
          <div className="notification-navbar">
            <NotificationsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
