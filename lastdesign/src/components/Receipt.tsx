import React from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import cardIcon from '../Assets/card.png'
import Paypal from '../Assets/paypal.png'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreateIcon from '@mui/icons-material/Create';
import visa from '../Assets/visa.png'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DateRangeIcon from '@mui/icons-material/DateRange';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const data=[
{
  date:'March, 01, 2020',
  idno:'#MS-415646',
  money:'$180'
},
{
  date:'February, 10, 2021',
  idno:' #RV-126749',
  money:' $250'
},
{
  date:'April, 05, 2020',
  idno:' #QW-103578',
  money:'$120'
},
{
  date:'June, 25, 2019',
  idno:' #MS-415646',
  money:'$180'
},
{
  date:'March, 01, 2019',
  idno:'#AR-803481',
  money:'$300'
},
{
  date:'March, 01, 2020',
  idno:'#MS-415646',
  money:'$180'
}
]

const data2=[
  {
    name:'oliver liam',
    company:'viking burrito',
    email:'oliver@burrito.com',
    vat:'FRB1235476'
  },
  {
    name:'lucas harper',
    company:'stone tech zone',
    email:   'lucas@stone-tech.com',
    Vat:'FRB1235476'
  },
  {
    name:'ethan james',
    company:'fiber notion',
    email:   'ethan@fiber.com',
    Vat:'FRB1235476'
  }

]

const data3 = [
  {
    company:'Netflix',
    date:'27 March 2020, at 12:30 PM',
    money:'-2,500'
  },
  {
    company:'Apple',
    date:'27 March 2020, at 04:30 AM',
    money:'+2,000'
  },
  {
    company:'Stripe',
    date:'26 March 2020, at 13:45 PM',
    money:'+750'
  },
  {
    company:'HubSpot',
    date:'26 March 2020, at 12:30 PM',
    money:'+1,000'
  },
  {
    company:'Creative Tim',
    date:'27 March 2020, at 12:30 PM',
    money:'+2,500'
  },
  {
    company:'Webflow',
    date:'26 March 2020, at 05:00 AM',
    money:'Pending'
  },
]


const Receipt = () => {
  // 
  return (
    <div className='billing-container'>
      <div className="content-1">
        <div className="content-1-child1">
      <div className="content-1-child1-01">
        <div className="debitcard">
      
        <WifiIcon className='debitcard-network' style={{ fontSize: '30px' }} />
        
        <div className="debitcard-number">4562    1122    4594    7852</div>
        <div className="debitcard-details">
          <div className="cardholder">
            <div className="card-holder01">
              Card Holder
            </div>
            <div className="card-name">
              Jack Peterson
            </div>
          </div>
          <div className="expiry">
            <div className="expires">Expires</div>
            <div className="expiry-date">11/22</div>
          </div>
          <img src={cardIcon} height={'25px'} width={'40px'} />
        </div>

        </div>
        <div className="salary">
          <div className="salary-photo">
            <AccountBalanceIcon />
          </div>
        <div className="salary-details">
          <div className='salary-name' style={{fontSize:'18px'}}>Salary</div>
          <div className="salary-name-detail" style={{fontSize:'13px',fontWeight:'500', color: 'rgb(147, 164, 194)'}}>Belong Interactive</div>
        </div>
      <div className="salary-money" style={{fontSize:'22px',fontWeight:'600',textAlign:'center',paddingBottom:'20px'}}>+$2000</div>
        </div>
        <div className="paypal">
          <div className='paypal-photo'><img src={Paypal}  className='paypal-icon' style={{filter: 'invert(100%)'}}/></div>
          <div className="paypal-details">
            <div className="paypal-name"  style={{fontSize:'18px'}}>PayPal</div>
            <div className="paypal-name-1" style={{fontSize:'13px',fontWeight:'500',  color: 'rgb(147, 164, 194)'}}>Freelance</div>
            <div className="paypal-name-2" style={{fontSize:'13px',fontWeight:'500', color: 'rgb(147, 164, 194)'}}>Payment</div>
          </div>

          <div className="paypal-money" style={{fontSize:'22px',fontWeight:'600',textAlign:'center',marginTop:'20px',paddingBottom:'10x'}}>$455.55</div>
          
        </div>
      </div>
      <div className='content-1-child1-02'>
        <div className="child-02-heading">
          <div className="method">Payment Method</div>
          <div className="AddNewCard">+ Add New Card</div>
        </div>
        <div className="child-02-pin">
          <div className='pin-1'>
            <img src={cardIcon} height={'15px'} width={'25px'}  />
            <div className="pin-1-number" style={{fontWeight:'600',fontSize:'20px'}}>****  ****  ****  7852</div>
            <div className="editpen">
              <CreateIcon style={{fontSize:'25px'}}/>
            </div>
          </div>
          <div className="pin-2">
          <img src={visa} height={'25px'} width={'30px'}  />
            <div className="pin-2-number" style={{fontWeight:'600',fontSize:'20px'}}>****  ****  ****  7852</div>
            <div className="editpen">
              <CreateIcon style={{fontSize:'25px'}}/>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className="content-1-child2">
        <div className="content-1-child2-01">
          <div className="content-1-child2-heading">
            <div className='Invoices'>Invoices</div>
            <div className="viewAll" style={{cursor:'pointer'}}>VIEW ALL</div>
          </div>
          <div className="invoice-lists">
            {data.map((element,index)=>(
            
           
            <div key={index} className="invoice-list-1">
              <div className="invoice-list-child-1">
                <div className="invoice-date">{element.date}</div>
                <div className="invoice-id">{element.idno}</div>
              </div>
              <div className="invoice-list-child-2" style={{fontSize:'16px',fontWeight:'600',color:'rgb(61, 83, 121)',width:'25%'}}>
                {element.money}
              </div>
              <div className="invoice-pdf" style={{cursor:'pointer',fontWeight:'600',fontSize:'17px',color:'rgb(52, 71, 103)',width:'25%'}}>
              <div> <PictureAsPdfIcon /> </div>
              < div> PDF</div>
               
              </div>
            </div>
             ))}
          </div>
          </div>

         
        </div>
      </div>
      <div className="content-2">
        <div className="content-2-child-1">
          <div className="content-2-child-1-heading">
            Billing Information
          </div>
          
          <div className="content-2-child-1-list">
          {data2.map((element,index)=>(
            <div className="content-2-child-1-childs">
            <div className="content-2-child-1-column1">
            <div className="column1-naming">{element.name}</div>
            <div className="column1-delete"><DeleteIcon style={{fontSize:'20px'}}/> <span>Delete</span></div>
            <div className="column1-edit"><EditIcon style={{fontSize:'20px'}}/><span>Edit</span></div>
            </div>
            <div className="column1-details">
              <div className="company-name"><span style={{fontWeight:'300'}}>Company Name:</span>{element.company}</div>
              <div className="email-Address"><span style={{fontWeight:'300'}}>Email Address:</span>{element.email}</div>
              <div className="vat-number"><span style={{fontWeight:'300'}}>VAT Number:</span>{element.vat}</div>
            </div>
            </div>
              ))}
          </div>
        </div>
        <div className="content-2-child-2">
  <div className="content-2-child-2-heading">
    <div className="transaction">Your Transaction's</div>
    <div className="transaction-date">
      <DateRangeIcon />
      <span style={{ paddingLeft: '10px', fontWeight: '400', fontSize: '16px' }}>
        23 - 30 March 2020
      </span>
    </div>
  </div>

  <div className="newest-column">
    <div
      className="newest"
      style={{ fontSize: '14px', fontWeight: '600', color: 'rgb(52, 71, 103)' }}
    >
      NEWEST
    </div>

    {data3.map((ele, index) => {
        const moneyValue = parseFloat(ele.money.replace(/[^0-9.-]+/g, ''));

      if (index === 2) {
        return (
          <>
            <div key="yesterday" className="newest-yesterday-header">
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'rgb(52, 71, 103)',
                  marginTop: '20px',
                  marginBottom: '10px',
                }}
              >
                YESTERDAY
              </div>
            </div>

            <div key={index} className="newest-column1">
              <div className="newest-icon" style={{ border: moneyValue < 0 ? '1px solid red' : '1px solid green'}}>
              {moneyValue<0 ?<KeyboardArrowDownIcon />:<KeyboardArrowUpIcon />}
              </div>
              <div className="newest-data">
                <div className="newest-name">{ele.company}</div>
                <div className="newest-timing">{ele.date}</div>
              </div>
              <div className="newest-money" style={{color:moneyValue<0?'red':'rgb(76, 175, 80)'}}>{'$'+ele.money}</div>
            </div>
          </>
        );
      }
      
      return (
        <div key={index} className="newest-column1">
          <div className="newest-icon" style={{ border: moneyValue < 0 ? '1px solid red' : '1px solid rgb(76, 175, 80)',}}>
            {moneyValue<0 ?<KeyboardArrowDownIcon />:<KeyboardArrowUpIcon />}
          </div>
          <div className="newest-data">
            <div className="newest-name">{ele.company}</div>
            <div className="newest-timing">{ele.date}</div>
          </div>
          <div className="newest-money"style={{color:moneyValue<0?'red':'rgb(76, 175, 80)'}}>{'$'+ele.money}</div>
        </div>
      );
    })}
  </div>
</div>

      </div>
    </div>
  )
}

export default Receipt