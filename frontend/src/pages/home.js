import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import { checkLoggedIn, getWalletId, userDetails } from "../utils/checkLoggedIn";
import { db } from "../utils/util";
import axios from "axios";
import { doc, collection, query, where, getDocs , updateDoc, serverTimestamp } from "firebase/firestore";
const Home = () => {
  const navigate = useNavigate();
  const [rideList, setrideList] = useState([]);

  useEffect(() => {
    if (!checkLoggedIn()) {
      navigate("/welcome");
    }else {
      getRides()
    } 
  }, []);

  

  function completeTransaction(src, dest, curr, amount, ownerid) {
    axios
      .post("https://rpydbddy-appsvc-01.azurewebsites.net/api/transfer", {
        amount: amount,
        currency: curr,
        source_ewallet: src,
        destination_ewallet: dest,
      })
      .then(function (response) {
        
        console.log(response.data);
        navigate('/dashboard')
        
      })
      .then(async()=> {
        const docRef = doc(db, 'users', userDetails().email);

    // Update isriding
    await updateDoc(docRef, {
        isriding: true,
        rideid : ownerid
    });
      })
      .catch(function (error) {
        alert(error)
        console.log(error);
      });
  };

  async function rideThisCab(destWallet, curr, amount, owner){
    const ownerid = owner.split("'")[0]
    const srcWallet = await getWalletId();
    alert("Do you want to complete the transaction?");
    completeTransaction(srcWallet,destWallet, curr, amount,owner)
  
  }


  async function getRides() {
    const q = query(collection(db, "rides"));
    const querySnapshot = await getDocs(q);
    let temp = []
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      temp.push(doc.data())

    });
    setrideList(temp)
  }

  // getRides()
  return (
    
    <>
      <Header></Header>
      <div className="bookcardiv">
        <div className="header">
          <h3>available rides</h3>
          <div className="extras">
            <p>sort/</p>
            <p>filter</p>
          </div>
        </div>
        <div className="ridesparent">
          {console.log(rideList)}
          {rideList.length > 0 ?rideList.map((item) => {
            return (
              <div className="availableride" style={{'marginBottom': '1rem'}}>
                <div>
                  <p className="name">{item.owner}</p>
                  <p className="places">From: {item.source}</p>
                  <p className="places">To: {item.destination}</p>
                  <p className="people">{item.remaining_seats} people riding</p>

                  <div style={{ display: "flex" }}>
                    <button
                      style={{
                        width: "7rem",
                        "font-size": "0.8rem",
                        height: "1.5rem",
                        fontWeight: "500",
                      }}

                      onClick={async e => await rideThisCab(item.wallet, item.fare.currency,item.fare.amount/item.remaining_seats, item.owner)}
                    >
                      ride this cab
                    </button>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        marginLeft: "1rem",
                        opacity: 0.7,
                      }}
                    >
                      Total ride estimate: {item.fare.currency} {item.fare.amount}
                    </p>
                  </div>
                </div>
                
              </div>
              
            );
          }): ""}
        </div>
        <button onClick={(e) => navigate("/book")}>Create a New Ride</button>
      </div>
      <br />
    </>
  );
};

export default Home;
