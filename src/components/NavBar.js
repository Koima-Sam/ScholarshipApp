import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
        <div className="logo">
          <h3>
            I.Scho<span>LAR</span>
          </h3>
        </div>

        <div className="nav-links">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/saved"}>Saved</NavLink>
            <NavLink to={"/login"}>Sign In</NavLink>
            <NavLink to={"/register"}>Sign Up</NavLink>
        </div>
    </div>
  );
}

export default NavBar;
