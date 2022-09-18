import React from 'react'
import Header from '../components/Header'
import '../styles/Dashboard.css'

const Dashboard = () => {
  return (
    <>
    <Header></Header>
    <div className='bookcardiv'>

    <div>
      <h3>active rides</h3>
      <br />
    <div className='activeride'>
 <div >
  <p className='name'>Sara's ride</p>
  <p className='places'>From: xyz</p>
  <p className='places'>To: abz</p>
<p className='people'>4 people riding</p>

<div style={{"display": "flex"}}>
<button style={{"width": "7rem", "font-size": "0.8rem", "height": "1.5rem", "fontWeight": "500"}}>end this ride</button>
<p style={{"fontSize": "0.8rem", "marginLeft": "1rem", "opacity": 0.7}}>Total ride estimate: INR 200</p>
</div>
 </div>


 </div>
    </div>
<div className='btnwrapper'>
  <h3>Share ride with your colleagues today</h3>
  <button>Share Ride</button>
</div>
    </div>
    </>
    
  )
}

export default Dashboard