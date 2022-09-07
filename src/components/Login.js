import React from "react";
import { NavLink } from "react-router-dom";

function Login(){
    return (
        <div className="signUpForm" >
            <form className="loginForm">
                <h2>Welcome back, Login to view Scholarships</h2>
                <input type={"email"} placeholder="Email"/><br/>
                <input type={"password"} placeholder="Password"/><br/>
                <input  type="button" value="Sign In"/> 

                <p>Not yet registered? <span><NavLink to={'/register'} className="sign">Sign Up</NavLink></span> to get started! </p>
            </form>
        </div>
    )
}
export default Login