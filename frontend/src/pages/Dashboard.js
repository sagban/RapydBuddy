import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import "../styles/Dashboard.css";
import { Navigate, useNavigate } from "react-router-dom";
import RideComponent from "../components/RideComponent";
import { checkLoggedIn, userDetails } from '../utils/checkLoggedIn';
import { doc, getDoc, collection,setDoc } from "firebase/firestore";
import { db, initialise } from "../utils/util";


const Dashboard = () =>  {
  const navigate = useNavigate();

  useEffect(()=> {
    if(checkLoggedIn()){
        console.log(userDetails())
        navigate("/dashboard")
    }else{
        navigate('/welcome')
    }
    getActiveRide()
  }, [])


  const getActiveRide = () => {
    initialise()
    const docRef = doc(db, "users", userDetails().email);
    getDoc(docRef).then((value)=>{
 if(value.exists()){
  console.log(value.data())
  document.getElementById("name").innerHTML = value.data()['owner']
  document.getElementById("source").innerHTML ="From: " +value.data()['source']
  document.getElementById("riders").innerHTML = value.data()['remaining_seats'] + " seats remaining"
  document.getElementById("dest").innerHTML ="To: "+ value.data()['destination']
  document.getElementById("fare").innerHTML ="Total ride estimate: "+ value.data()['fare']['currency'] + " "+ value.data()['fare']['amount']
 }
 else{
  console.log("empty")
 }
    });
  
  }


  
 
  return (

    

    <>
      <Header></Header>
      <div className="bookcardiv">
        <div>
          <h3>active rides</h3>
          <br />

          {/* space*/}

          <div className="activeride">
      <div>
        <p className="name" id="name">Sara's ride</p>
        <p className="places" id="source">From: xyz</p>
        <p className="places" id="dest">To: abz</p>
        <p className="people" id="riders">4 people riding</p>

        <div style={{ display: "flex" }}>
          <button
            style={{
              width: "7rem",
              "font-size": "0.8rem",
              height: "1.5rem",
              fontWeight: "500",
            }}
          >
            end this ride
          </button>
          <p style={{ fontSize: "0.8rem", marginLeft: "1rem", opacity: 0.7 }} id="fare">
            Total ride estimate: INR 200
          </p>
        </div>
      </div>
    </div>

{/* space */}
        </div>
        <div className="btnwrapper">
          <h3>Share ride with your colleagues today</h3>
          <button onClick={(e) => navigate("/")}>Share Ride</button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
