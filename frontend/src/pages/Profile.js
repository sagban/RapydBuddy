import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import { initialise, db } from '../utils/util';
import { doc, getDoc , updateDoc, serverTimestamp } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";
import { checkLoggedIn, userDetails } from '../utils/checkLoggedIn';
import '../styles/Profile.css'

const Profile = () => {

  const baseUrl = 'https://rpydbddy-appsvc-01.azurewebsites.net/api/'
  const [ewalletID , setewalletID ] = useState(null);
  const [fName , setfName ] = useState(null);
  const [lname , setlName ] = useState(null);
  const [wallet , setwallet ] = useState([]);
  const [transaction , settransaction ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    
    if(checkLoggedIn()){
      console.log("calling")
      const docRef = doc(db, "users", userDetails().email);

      //get data from firebase
      getDoc(docRef).then((value) => {
        if (value.exists()) {
          console.log(value.data())
          setewalletID(value.data()['wallet'])
          getWalletData(value.data()['wallet']);
          getTransactionHistory(value.data()['wallet']);
        }

      });
  
  
      
      console.log("implement")
      // completeTransaction("ewallet_xxx", "ewallet_xxx")
      // completeTransaction()
      
  }else{
      navigate('/welcome')
  }
    

  }, [])


  const getTransactionHistory = (ew) => {
    
    axios.get(`${baseUrl}/wallet-transactions/${ew}`).then(res => {
      let transactionData = res.data.data.data
      let temp = []
      for(let transaction of transactionData){
        temp.push({
          'currency':transaction['currency'],
          'amount':  transaction['amount']
        })
      }
      settransaction(temp)
    })
  }

  const getWalletData = (ew) => {
    axios.get(`${baseUrl}/user-wallet/${ew}`).then(res => {
      const walletData = res.data.data.data
      setfName(walletData.first_name)
      setlName(walletData.last_name)
      let temp = []
      for(let wallet of walletData.accounts){
        temp.push({
          'currency': wallet.currency,
          'amount': wallet.balance
        })
      }
      setwallet(temp)
    })
  }

  const completeTransaction = (src, dest) => {
    axios.post('https://rpydbddy-appsvc-01.azurewebsites.net/api/transfer', {
  "amount": 1,
  "currency": "USD",
  "source_ewallet": src,
  "destination_ewallet": dest
})
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });
  }

  

  return (
    <>
      <Header></Header>
      <center>
      <br /><br />
        <h2>{fName} {lname}'s profile</h2>
        <br /><br />
        <h3>Transactions</h3>
        <div className="transaction-parent">
        {transaction.map(item => {
          return <div className="transaction">
          <div style={{"display": "flex"}}>
          <label>{item.currency}</label>
          <div style={{"width": "1rem"}}></div>
          <p>{item.amount}</p>
          </div>
          <p>{(item.amount.toString()[0]=='-')?"↓":"↑"} </p>
        </div>
        })}
          
        </div>
        <br /><br />
        <h3>wallet</h3>
        <div className="transaction-parent">
          <div className="transaction">
          {wallet.map(item => {
          return <div className="wallet2">
         <div style={{"display": "flex"}}>
          <label>{item.currency}</label>
          <div style={{"width": "1rem"}}></div>
          <p>{item.amount}</p>
          </div>
        </div>
        })}
          </div>
        </div>
      </center>
      
    </>
    

  )
}

export default Profile