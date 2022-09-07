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
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/saved" element={<Saved />} />
        <Route exact path = "/" element = {<DashBoard />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
