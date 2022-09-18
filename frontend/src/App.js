import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/profile" element={<Profile/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
