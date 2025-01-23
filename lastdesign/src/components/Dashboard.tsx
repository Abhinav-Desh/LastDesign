import React from 'react'
import WeekendIcon from '@mui/icons-material/Weekend';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import HouseIcon from '@mui/icons-material/House';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Barchart1  from '../charts/Barchart1.tsx';
const Dashboard = () => {
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
                <div className='card4-child-2-01'><span >+55%</span>than last week</div>
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
              <div className='card4-child-2-01'><span >+3%</span>than last month</div>
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
              <div className='card4-child-2-01'><span >+1%</span>than yesterday</div>
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
      <div className='stats'>(+15%) increase in today sales</div>
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
              <div className='details-child-02'>30 done this month</div>
            </div>
            <div className="details-child-2"></div>
          </div>
        </div>
        <div className="overview">
          hello
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard;
