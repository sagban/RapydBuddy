import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import "../styles/Dashboard.css";
import { Navigate, useNavigate } from "react-router-dom";
import RideComponent from "../components/RideComponent";
import { checkLoggedIn, userDetails } from '../utils/checkLoggedIn';
import { doc, getDoc } from "firebase/firestore";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(()=> {
    if(checkLoggedIn()){
        console.log(userDetails())
        navigate("/")
    }else{
        navigate('/welcome')
    }
  }, [])

  const getActiveRide = () => {
    
  }

  return (

    

    <>
      <Header></Header>
      <div className="bookcardiv">
        <div>
          <h3>active rides</h3>
          <br />

          <RideComponent ></RideComponent>
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
