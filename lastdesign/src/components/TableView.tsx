import React from 'react';
import LetterA from '../Assets/letter-a.png';
import LinkedIn from '../Assets/linkedin.png';
import Slack from '../Assets/slack.png';
import Spotify from '../Assets/spotify.png';
import Xdlodo from '../Assets/xd.png';
import avatar from '../Assets/avatar.png';
import man from '../Assets/man.png';
import people from '../Assets/people.png';
import profile from '../Assets/profile.png';
import user from '../Assets/user.png';
import mother from '../Assets/mother.png';


const imageIcons = [
  LetterA,
  LinkedIn,
  Slack,
  Spotify,
  Xdlodo,
  Spotify, 
];

const faceIcons = [
  avatar,
  man,
  mother,
  people,
  profile,
  user
]
const Table1 = [
  {
    Name: "John Michael",
    Email: "john@creative-tim.com",
    Function: "Manager",
    Role: "Organization",
    Status: "online",
    Employed: "23/04/18",
  },
  {
    Name: "Alexa Liras",
    Email: "alexa@creative-tim.com",
    Function: "Programator ",
    Role: "Developer",
    Status: "offline",
    Employed: "11/01/19",
  },
  {
    Name: "Laurent Perrier",
    Email: "laurent@creative-tim.com",
    Function: "Executive",
    Role: "Projects",
    Status: "online",
    Employed: "19/09/17",
  },
  {
    Name: "Michael Levi",
    Email: "michael@creative-tim.com",
    Function: "Programator",
    Role: "Developer",
    Status: "online",
    Employed: "24/12/08",
  },
  {
    Name: "Richard Gran",
    Email: "richard@creative-tim.com",
    Function: "Manager",
    Role: "Executive",
    Status: "offline",
    Employed: "23/04/18",
  },
  {
    Name: "Miriam Eric",
    Email: "miriam@creative-tim.com",
    Function: "Programator",
    Role: "Developer",
    Status: "offline",
    Employed: "23/04/18",
  },
];

const Table2=[
  {
    project:'Asana',
    budget:'$2,500',
    status:'working',
    completion:'60%'
  },
  {
    project:'Github',
    budget:'$5,000',
    status:'done',
    completion:'100%'
  },
  {
    project:'Atlassian',
    budget:'$3,400',
    status:'working',
    completion:'60%'
  },
  {
    project:'Spotify',
    budget:'$2,500',
    status:'cancelled',
    completion:'60%'
  },
  {
    project:'Slack',
    budget:'$1,500',
    status:'working',
    completion:'60%'
  },
  {
    project:'Invesion',
    budget:'$2,300',
    status:'cancelled',
    completion:'60%'
  }
]
const TableView = () => {
  return (
    <div className="table-container">
      <div className="table-content">
        <div className="table-1-container">
          <div className="table-heading-1">Authors Table</div>
          <div className="table-1-data">
            <table>
              <thead>
                <tr className='table-main-header'>
                  <th className='author-column' style={{ fontSize:'14px', width: '30%',textAlign:'start',color:' rgb(123, 128, 154)' }}>AUTHOR</th>
                  <th className='author-function' style={{ fontSize:'14px', width: '15%',textAlign:'start',color:' rgb(123, 128, 154)'}}>FUNCTION</th>
                  <th className='author-status' style={{  fontSize:'14px',width: '15%',textAlign:'start',color:' rgb(123, 128, 154)'}}>STATUS</th>
                  <th className='author-date' style={{  fontSize:'14px',width: '20%',textAlign:'start' ,color:' rgb(123, 128, 154)'}}>EMPLOYED</th>
                  <th className='action' style={{ fontSize:'14px', width: '20%',textAlign:'start',color:' rgb(123, 128, 154)' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {Table1.map((row, index) => (
                  <tr key={index} className='rows-head'>
                    <td className='author-main'>
                      <div className="author-container">
                        <div className='author-image'>
                          <img src={faceIcons[index]} alt="" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                        </div>
                        <div className='author-name-email'>
                          <div className='author-name'>{row.Name}</div>
                          <div className='author-email'>{row.Email}</div>
                        </div>
                      </div>
                    </td>
                    <td className='author-function'>
                      <div className='function-function'>{row.Function}</div>
                      <div className='function-role'>{row.Role}</div>
                    </td>
                    <td className='status-check'>
                      <span
                        style={{
                          color: '#fff',
                          background: row.Status === 'online'
                            ? 'linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))'
                            : 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
                          fontSize: '12px',
                          fontWeight: '600',
                          padding: '2px 10px',
                          borderRadius: '5px',
                        }}
                        className='status-button'
                      >
                        {row.Status.toUpperCase()}
                      </span>
                    </td>
                    <td className='employed'>{row.Employed}</td>
                    <td>
                      <button className='Edit' style={{ padding: '6px 12px'}}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="table-1-container table-2">
          <div className="table-heading-1">Authors Table</div>
          <div className="table-1-data">
            <table>
              <thead>
                <tr className='table-main-header'>
                <th className='author-column' style={{ fontSize:'14px',width: '20%',textAlign:'start',color:' rgb(123, 128, 154)' }}>PROJECT</th>
                  <th className='author-function' style={{  fontSize:'14px',width: '20%',textAlign:'start',color:' rgb(123, 128, 154)'}}>BUDGET</th>
                  <th className='author-status' style={{  fontSize:'14px',width: '20%',textAlign:'start',color:' rgb(123, 128, 154)'}}>STATUS</th>
                  <th className='author-date' style={{  fontSize:'14px',width: '20%',textAlign:'start' ,color:' rgb(123, 128, 154)'}}>COMPLETION</th>
                  <th className='action' style={{  fontSize:'14px',width: '20%',textAlign:'start',color:' rgb(123, 128, 154)' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {Table2.map((row, index) => (
                  <tr key={index} className='rows-head'>
                    <td className='author-main'>
                      <div className="author-container">
                        <div className='author-image'>
                          <img src={imageIcons[index]} alt="" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                        </div>
                        <div className='author-name-email'>
                          <div className='author-name'>{row.project}</div>
                        </div>
                      </div>
                    </td>
                    <td className='author-function'>
                      <div className='function-function'>{row.budget}</div>
                    </td>
                    <td className='status-check'>
                      <span
                        style={{
                          color: ' rgb(123, 128, 154)',
                          fontSize: '14px',
                          fontWeight: '700',
                        }}
                        className='status-button'
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className='employed'>{row.completion}</td>
                    <td>
                      <button className='Edit' style={{ padding: '6px 12px'}}>
                      <div className="details-child-2" style={{height:'18px',width:'10px'}}>
              <div className='dot1 dot'></div>
              <div className="dot2 dot"></div>
              <div className="dot3 dot"></div>
            </div>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableView;
