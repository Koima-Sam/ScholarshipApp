import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Saved from "./components/Saved";

function App() {
  const[scholarships, setSholarships] = useState([])
  const[isLoggedIn, setLoggedIn] = useState(false)
  const[id,setId] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:9292/scholarships')
    .then(response => response.json())
    .then(data => setSholarships(data))
  },[]);

console.log(scholarships)
  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route exact path="/" element={<Home  isLoggedIn={isLoggedIn}/>} />
        <Route exact path="/login" element={<Login setId ={setId} setLoggedIn={setLoggedIn}/>} />
        <Route exact path="/dashboard" element={<DashBoard scholarships={scholarships} isLoggedIn={isLoggedIn} id={id}/>} />
        <Route exact path="/register" element={<Register setId ={setId} setLoggedIn={setLoggedIn}/>} />
        <Route exact path="/saved" element={<Saved id={id}/>} />
        {/* <Route exact path = "/" element = {<DashBoard />}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
