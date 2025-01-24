import React from 'react';
import Spotify from '../Assets/spotify.png'
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
                  <th className='author-column'>Author</th>
                  <th className='author-function'>Function</th>
                  <th className='author-status'>Status</th>
                  <th className='author-date'>Employed</th>
                  <th className='action'>Action</th>
                </tr>
              </thead>
              <tbody>
                {Table1.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <div className="author-container">
                    <div className='author-image'>
                      <img src={Spotify} alt="" />
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
                          color: row.Status === 'online' ? 'green' : 'red',
                        }}
                      >
                        {row.Status}
                      </span>
                    </td>
                    <td>{row.Employed}</td>
                    <td>
                      <button className='Edit'>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="table-2-container">table2</div>
      </div>
    </div>
  );
};

export default TableView;
