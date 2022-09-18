import React from 'react'
import Header from '../components/Header'
import '../styles/BookCar.css'
import switchicon from '../images/switch.svg'

const BookCar = () => {
  return (
    <>
    <Header></Header>
    <div className='bookcardiv'>
      

<div className='sourcedest'>
  <div>
    <img src={switchicon} alt="" />
  </div>
  <div className='sourcedestinputs'>
  <div className='parentinput'>
  <input type="text" className='sourcedestinput src' />
  </div>
  <br />
  <div className='parentinput'> 
  <input type="text" className='sourcedestinput dest' />
  </div>
  </div>
</div>

<div className='fieldsdiv'>
  <label htmlFor="datetime" style={{"marginBottom": "-2rem"}}>Select Time and Date</label>
  <input type="datetime-local" name="datetime" id="" className='inputfields'  placeholder='Select time and date'  />
  <input type="number" name="" id="" className='inputfields' placeholder='No. of seats available' />
  <input type="number" name="" id="" className='inputfields' placeholder='Ride estimate cost' />
</div>
<button>Next</button>
    </div>
    </>
    
  )
}

export default BookCar