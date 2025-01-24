import React from 'react';
import Spotify from '../Assets/spotify.png';
import { green } from '@mui/material/colors';

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
                  <th className='author-column' style={{ width: '30%',textAlign:'start' }}>Author</th>
                  <th className='author-function' style={{ width: '15%',textAlign:'start' }}>Function</th>
                  <th className='author-status' style={{ width: '15%',textAlign:'start' }}>Status</th>
                  <th className='author-date' style={{ width: '20%',textAlign:'start' }}>Employed</th>
                  <th className='action' style={{ width: '20%',textAlign:'start' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {Table1.map((row, index) => (
                  <tr key={index} className='rows-head'>
                    <td className='author-main'>
                      <div className="author-container">
                        <div className='author-image'>
                          <img src={Spotify} alt="" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
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
        <div className="table-2-container">
          tabletable
          table
          table
          table
          table
          table
          table
          table
          table
          table
          table
          table
          tabletable
        </div>
      </div>
    </div>
  );
};

export default TableView;
