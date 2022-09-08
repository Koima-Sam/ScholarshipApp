import React, { useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom'
function Register(){
    const navigate = useNavigate()
    const[user, setUser] = useState({name:"", email:"",phone:"",password:""})

    function handleChange(e){
        setUser({...user, [e.target.name] : e.target.value})
    }
    function validateInputs(e){
        e.preventDefault()
        if(user.name===""||user.email==="" ||user.phone===""||user.password===""){
            alert("Please fill all fields")
        }
        else{
            createUser(e)
        }
    }

    function createUser(e){
        // e.preventDefault()
        // console.log(JSON.stringify(user))
        fetch("http://localhost:9292/users",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            navigate('/dashboard')
        } )
        .catch((error)=>console.log(error))
    }
    return (
        <div className="signUpForm">
            <form onSubmit={validateInputs}>
                <h2>Fill in the details to create your account</h2>
                <input name="name" type={"text"} placeholder="Full Name" value={user.name} onChange={handleChange}/> <br/>
                <input name="email" type={"email"} placeholder="Email" value={user.email} onChange={handleChange}/><br/>
                <input name="phone" type={"number"} placeholder="Phone" value={user.phone} onChange={handleChange}/><br/>
                <input name="password" type={"password"} placeholder="Password" value={user.password} onChange={handleChange}/><br/>
                {/* <input type={"password"} placeholder="Confirm Password"/> <br /> */}
                <input  type="submit" id ="submit"value="Create Account"/> 
                <p>Already have an account? <span><NavLink to={'/login'} className="sign">Sign In</NavLink></span>!</p>
            </form>
        </div>

    )
}
export default Register