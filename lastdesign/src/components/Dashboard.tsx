import React from 'react'
import WeekendIcon from '@mui/icons-material/Weekend';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import HouseIcon from '@mui/icons-material/House';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Barchart1  from '../charts/Barchart1.tsx';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LetterA from '../Assets/letter-a.png';
import LinkedIn from '../Assets/linkedin.png';
import Slack from '../Assets/slack.png';
import Spotify from '../Assets/spotify.png'
import Xdlodo from '../Assets/xd.png'
import StepperComponent from '../MuiComponents/StepperComponent.tsx';

const Dashboard = () => {
  const companyImages = {
    'Material UI XD Version': LetterA,
    'Add Progress Track': LinkedIn,
    'Fix Platform Errors': Slack,
    'Launch our Mobile App': Spotify,
    'Add the New Pricing Page': Xdlodo,
    'Redesign New Online Shop': LinkedIn,
  };
  return (
    <div className="dashboard-parent">
      <div className="dashboard-content">
        <div className="four-cards">
          {/* Card 1 */}
          <div className="card4 card-1">
              <div className="card4-child-1">
            
                <div className="child-01 child-01-icon1"><WeekendIcon /></div>
                <div className='child-02'>
                  <div className='child-02-naming'>Bookings</div>
                  <div className="child-02-number">281</div>
                </div>
              </div>
              <div className="card4-child-2">
                <div className='card4-child-2-01'><span className='percent' >+55%</span>than last week</div>
              </div>
          </div>
          
          {/* Card 2 */}
          <div className="card4 card-2">
            <div className="card4-child-1">
              <div className="child-01 child-01-icon2"><EqualizerIcon /></div>
              <div className='child-02'>
                <div className='child-02-naming'>Today's reviews</div>
                <div className="child-02-number">2300</div>
              </div>
            </div>
            <div className="card4-child-2">
              <div className='card4-child-2-01'><span className='percent'>+3%</span>than last month</div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="card4 card-3">
            <div className="card4-child-1">
              <div className="child-01 child-01-icon3"><HouseIcon /></div>
              <div className='child-02'>
                <div className='child-02-naming'>Revenue</div>
                <div className="child-02-number">24k</div>
              </div>
            </div>
            <div className="card4-child-2">
              <div className='card4-child-2-01'><span className='percent'>+1%</span>than yesterday</div>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="card4 card-4">
            <div className="card4-child-1">
              <div className="child-01 child-01-icon4"><PersonAddAlt1Icon /></div>
              <div className='child-02'>
                <div className='child-02-naming'>Followers</div>
                <div className="child-02-number">+91</div>
              </div>
            </div>
            <div className="card4-child-2">
              <div className='card4-child-2-01'>Just updated</div>
            </div>
          </div>
        </div>
        
       {/* 3 graph cards starts from here */}
       <div className="three-graphs">
  <div className="graph-1 Allgraph">
    <div className="chart-image" style={{backgroundImage : "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"}}>
      <Barchart1 />
    </div>
    
    {/* Statistics */}
    <div className='statistics'>
      <div className="work-name">
        Website Views
      </div>
      <div className='stats'>Last Campaign Performance</div>
    </div>
    
    {/* Last Updated */}
    <div className='updation'>
      Campaign sent 2 days ago
    </div>
  </div>
  
  {/* Graph 2 */}
  <div className="graph-2 Allgraph">
    <div className="chart-image" style={{backgroundImage : " linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"}}>
      {/* Replace with your actual chart component */}
      <Barchart1 />
    </div>
    <div className='statistics'>
      <div className="work-name">
        Daily Sales
      </div>
      <div className='stats'> <span style={{fontWeight:'600',color:' #808d96'}}>(+15%)</span> increase in today sales</div>
    </div>
    
    {/* Last Updated */}
    <div className='updation'>
    updated 4 min ago
    </div>
  </div>
  
  {/* Graph 3 */}
  <div className="graph-3 Allgraph">
   
    <div className="chart-image " style={{backgroundImage : " linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"}}>
      <Barchart1 />
    </div>
   
    {/* Statistics */}
    <div className='statistics'>
      <div className="work-name">
      Completed Tasks
      </div>
      <div className='stats'>Last Campaign Performance</div>
    </div>
    
    {/* Last Updated */}
    <div className='updation'>
      Just Updated
    </div>
  </div>
</div>
      <div className="project-overview">
        <div className="projects-table">
          <div className='projects-details'>
            <div className="details-child-1">
              <div className='details-child-01'>Projects</div>
              <div className='details-child-02'> <span style={{fontWeight:'700',color:' #808d96'}}>30 done</span> this month</div>
            </div>
            <div className="details-child-2">
              <div className='dot1 dot'></div>
              <div className="dot2 dot"></div>
              <div className="dot3 dot"></div>
            </div>
          </div>
          {/* make a table  */}
          <div className="show-table">
      <table className="projects-table-content">
        <thead>
          <tr style={{ width: '100%', height: '50px', fontSize: '16px', color: '#9d9fa0' }}>
            <th style={{ textAlign: 'start' }}>Companies</th>
            <th style={{ textAlign: 'start' }}>Members</th>
            <th style={{ textAlign: 'start' }}>Budget</th>
            <th style={{ textAlign: 'start' }}>Completion</th>
          </tr>
        </thead>
        <tbody>
          {/* Row 1 */}
          <tr className='whole-row'>
            <td className='column-1'>
             <div> <img src={companyImages['Material UI XD Version']} alt="Company Logo" /></div>
             <div>Material UI XD Version </div> 
            </td>
            <td>10</td>
            <td style={{ fontSize: '15px' }}>$10,000</td>
            <td><span className="dot-status completed"></span> 80%</td>
          </tr>
          {/* Row 2 */}
          <tr className='whole-row'>
            <td className='column-1'>
              <span>
                <img src={companyImages['Add Progress Track']} alt="Company Logo" />
              </span>
              Add Progress Track
            </td>
            <td>5</td>
            <td style={{ fontSize: '15px' }}>$8,000</td>
            <td><span className="dot-status in-progress"></span> 60%</td>
          </tr>
          {/* Row 3 */}
          <tr className='whole-row'>
            <td className='column-1'>
              <span>
                <img src={companyImages['Fix Platform Errors']} alt="Company Logo" />
              </span>
              Fix Platform Errors
            </td>
            <td>8</td>
            <td style={{ fontSize: '15px' }}>$12,000</td>
            <td><span className="dot-status not-started"></span> 40%</td>
          </tr>
          {/* Row 4 */}
          <tr className='whole-row'>
            <td className='column-1'>
              <span>
                <img src={companyImages['Launch our Mobile App']} alt="Company Logo" />
              </span>
              Launch our Mobile App
            </td>
            <td>10</td>
            <td style={{ fontSize: '14px' }}>$10,000</td>
            <td><span className="dot-status completed"></span> 80%</td>
          </tr>
          {/* Row 5 */}
          <tr className='whole-row'>
            <td className='column-1'>
              <span>
                <img src={companyImages['Add the New Pricing Page']} alt="Company Logo" />
              </span>
              Add the New Pricing Page
            </td>
            <td style={{alignContent:'center'}}>10</td>
            <td style={{ fontSize: '15px' }}>$14,000</td>
            <td><span className="dot-status completed"></span> 80%</td>
          </tr>
          {/* Row 6 */}
          <tr className='whole-row'>
            <td className='column-1'>
              <span>
                <img src={companyImages['Redesign New Online Shop']} alt="Company Logo" />
              </span>
              Redesign New Online Shop
            </td>
            <td>10</td>
            <td style={{ fontSize: '15px' }}>$12,000</td>
            <td><span className="dot-status completed"></span> 80%</td>
          </tr>
        </tbody>
      </table>
</div>
        </div>
        <div className="overview">
          <div className="overview-details">
            <div className="orders-overview">Orders overview</div>
            <div className="orders-metric"><span><ArrowUpwardIcon sx={{color:'rgb(76, 175, 80)',fontSize:'18px',fontWeight:'700'}}/></span><span style={{fontWeight:'700',fontSize:'15px',color:'gray'}}>24%</span>  this month</div>
          </div>
          <StepperComponent />
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard;
