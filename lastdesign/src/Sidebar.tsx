import React from "react";
import { useState } from "react";
import logo from '../src/Assets/logo-white.svg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableViewIcon from '@mui/icons-material/TableView';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Sidebar = () =>{
    const [changebackground,SetChangeBackground] = useState<any>({
        index1:'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));',
        index2:'#ffffff',
        index3:'black'
    });
    const navlist=['Dashboard','Tables','Billing','Notification','Profile','Sign-In','Sign-Up'];

    const navIcon = [
        <DashboardIcon />,
        <TableViewIcon />,
        <ReceiptLongIcon />,
        <FormatTextdirectionRToLIcon />,
        <NotificationsIcon />,
        <PersonIcon />,
        <LogoutIcon />,
        <ExitToAppIcon />
    ]
    const [activeIndex,setActiveIndex] = useState(0);
    const [activeBackgroundIndex,setActiveBackgroundIndex] = useState(0);

    const handleClick = (index:any)=>{
        setActiveIndex(index);
    }
return(
    <div className="sidebar-container">
        <div className="sidebar-content">
        <div className="dashboard-heading">
            <img src={logo} alt=""  height={'40px'} width={'40px'}/>
            <div style={{fontSize:'20px',fontWeight:'600',color:'white'}}>Dashboard</div>
        </div>
        <div className="nav-options">
        {navlist.map((ele, index) => (
                        <div
                            key={index}
                            className={`nav ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => handleClick(index)}
                        >
                            <div className="icon" >{navIcon[index]}</div>
                            <div className="text">{ele}</div>
                            
                        </div>
                    ))}
        </div>
        </div>

    </div>
);
}

export default Sidebar;