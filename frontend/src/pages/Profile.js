import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'

const Profile = () => {

  const baseUrl = 'https://rpydbddy-appsvc-01.azurewebsites.net/api/'

  useEffect(()=> {
    // getWalletData();
    // getTransactionHistory();
    completeTransaction("ewallet_xxx","ewallet_xxx")
    // completeTransaction()
  }, [])


  const getTransactionHistory = () => {
    axios.get(`${baseUrl}/wallet-transactions/ewallet_xxx`).then(res => {
      console.log(res.data)
    })
  }

  const getWalletData = () => {
    axios.get(`${baseUrl}/user-wallet/ewallet_xxx`).then(res => {
      console.log(res.data)
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
        <h2>Aakash Shrivastava</h2>
        <br /><br />
        <h3>Wallet</h3>
        <div className="wallet-parent">
          <div className="wallet">
            <label>usd</label>
            <p>USD 10.00</p>
          </div>
        </div>
        <br /><br />
        <h3>Transaction</h3>
        <div className="transaction-parent">
          <div className="transaction">
            <div className="heading">
              <p>withdrawal</p>
              <p>-47 USD</p>
            </div>
          </div>
        </div>
      </center>
      
    </>
    

  )
}

export default Profile