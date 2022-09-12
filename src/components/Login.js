import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login({setId, setLoggedIn}){
    const navigate = useNavigate()
    const[userObj,setUserInput] = useState({email:"",password:""})
   
    function handleChange(e){
        setUserInput({...userObj,[e.target.name]:e.target.value})
    }

    function loginUser(e){
        e.preventDefault()
        // console.log(userObj)
        fetch(`https://guarded-earth-32848.herokuapp.com/users/${userObj.email}`)
        .then(resp => resp.json())
        .then(data =>{
            data.password === userObj.password ? initiateLogin(data.id): alert("Invalid password")
        })
        .catch(error=>{
            console.log(error)
            alert('User not found')
        })
    }
    function initiateLogin(id){
        setId(id)
        setLoggedIn(true)
        navigate('/dashboard')
    }
    return (
        <div className="signUpForm" >
            <form className="loginForm" onSubmit={loginUser}>
                <h2>Welcome back, Login to view Scholarships</h2>
                <input type={"email"} placeholder="Email" value={userObj.email} onChange={handleChange} name="email"/><br/>
                <input type={"password"} placeholder="Password" value={userObj.password} onChange={handleChange}name="password"/><br/>
                <input  type="submit" value="Sign In"/> 

                <p>Not yet registered? <span><NavLink to={'/register'} className="sign">Sign Up</NavLink></span> to get started! </p>
            </form>
        </div>
    )
}
export default Login