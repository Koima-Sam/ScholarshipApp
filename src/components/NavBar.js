import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({isLoggedIn, setLoggedIn}) {
  return (
    <div className="navbar">
        <div className="logo">
          <img src="https://koima-sam.github.io/Scholarship-Site/Assets/images/logo-removebg-preview.png" alt="logo"/>
          <h3>
            I.SCHO<span>LAR</span>
          </h3>
        </div>

        <div className="nav-links">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/saved"}>{isLoggedIn? "Saved": null}</NavLink>
            <NavLink id ="signup"to={"/register"}>{isLoggedIn? <NavLink to={"/dashboard"}>Scholarships</NavLink>: "Sign Up"}</NavLink>
            <NavLink id ="sign" to={"/login"} onClick={()=> {
              if(isLoggedIn===true){
                setLoggedIn(!isLoggedIn)
              }
              }}>{isLoggedIn? "Sign Out" :"Sign In"}</NavLink>
        </div>
    </div>
  );
}

export default NavBar;
