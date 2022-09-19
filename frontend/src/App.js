import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';
import BookCar from './pages/BookCar';
import Welcome from './pages/Welcome';
import { useEffect, useState } from 'react';
import { checkLoggedIn } from './utils/checkLoggedIn'

function App() {



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/book" element={<BookCar />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/welcome" element={<Welcome />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
