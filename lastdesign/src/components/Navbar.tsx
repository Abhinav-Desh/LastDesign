import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";

interface NavbarProps {
  activeIndex: any;
  setActiveIndex: any;
  toggleMenu: any;
  setToggleMenu: any;
}

const Navbar: React.FC<NavbarProps> = ({ activeIndex, setActiveIndex, toggleMenu, setToggleMenu }) => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  // State to hold the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect to handle window resize and update windowWidth state
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu); 
  };

  useEffect(()=>{
    if(windowWidth > 1012){
      setToggleMenu(false)
    }
  },[windowWidth])
  console.log(windowWidth)
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
            {toggleMenu ? <MenuOpenIcon /> : <MenuIcon />}
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
