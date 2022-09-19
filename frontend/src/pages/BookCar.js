import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import '../styles/BookCar.css'
import switchicon from '../images/switch.svg'
import { doc, setDoc , updateDoc, serverTimestamp } from "firebase/firestore";
import { userDetails, getWalletId } from '../utils/checkLoggedIn';
import { initialise, db } from '../utils/util';
import { useNavigate } from 'react-router-dom';

const BookCar = () => {

  const navigate = useNavigate();

  const [src , setSrc ] = useState("");
  const [dest , setDest ] = useState("");
  const [dateTime , setDateTime ] = useState(null);
  const [seats , setSeats ] = useState(null);
  const [cost , setCost ] = useState(null);



  const uploadData = async (e) => {
    e.preventDefault()
    console.log(src, dest, dateTime, seats, cost)
    const wallet = await getWalletId()
    
    const data = {
        source: src,
        destination: dest,
        datetime: dateTime.toString(),
        fare: {
            currency: "INR",
            amount: cost
        },
        isactive: true,
        members: [],
        remaining_seats: seats,
        isOwner : true,
        owner: userDetails().email + "'s ride",
        wallet: wallet
    }


    await setDoc(doc(db, "rides", userDetails().email), data);
    const docRef = doc(db, 'users', userDetails().email);

    // Update isriding
    await updateDoc(docRef, {
        isriding: true,
        rideid : userDetails().email
    });
    alert("Your ride has been created successfully!")
    navigate("/")
  }    
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
  <input type="text" className='sourcedestinput src' value={src} onChange={(e) => setSrc(e.target.value)}/>
  </div>
  <br />
  <div className='parentinput'> 
  <input type="text" className='sourcedestinput dest' value={dest} onChange={(e) => setDest(e.target.value)}/>
  </div>
  </div>
</div>

<div className='fieldsdiv'>
  <label htmlFor="datetime" style={{"marginBottom": "-2rem"}}>Select Time and Date</label>
  <input type="datetime-local" name="datetime" id="" className='inputfields'  placeholder='Select time and date'  value={dateTime} onChange={(e) => setDateTime(e.target.value)}/>
  <input type="number" name="" id="" className='inputfields' placeholder='No. of seats available' value={seats} onChange={(e) => setSeats(e.target.value)}/>
  <input type="number" name="" id="" className='inputfields' placeholder='Ride estimate cost' value={cost} onChange={(e) => setCost(e.target.value)}/>
</div>
<button onClick={e => uploadData(e)}>Next</button>
    </div>
    </>
    
  )
}

export default BookCar