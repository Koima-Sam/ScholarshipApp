import React from "react";
import {NavLink} from 'react-router-dom'
function Register(){
    return (
        <div className="signUpForm">
            <form>
                <h2>Fill in the details to create your account</h2>
                <input type={"text"} placeholder="Full Name"/> <br/>
                <input type={"email"} placeholder="Email"/><br/>
                <input type={"number"} placeholder="Phone"/><br/>
                <input type={"password"} placeholder="Password"/><br/>
                <input type={"password"} placeholder="Confirm Password"/> <br />
                <input  type="button" id ="submit"value="Create Account"/> 
                <p>Already have an account? <span><NavLink to={'/login'} className="sign">Sign In</NavLink></span>!</p>
            </form>
        </div>

    )
}
export default Register