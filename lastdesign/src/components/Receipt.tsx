import React from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import cardIcon from '../Assets/card.png'
import Paypal from '../Assets/paypal.png'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreateIcon from '@mui/icons-material/Create';
import visa from '../Assets/visa.png'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

// March, 01, 2020
// #MS-415646
// $180
//  PDF
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
          {/* March, 01, 2020
#MS-415646
$180
 PDF */}
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
    </div>
  )
}

export default Receipt