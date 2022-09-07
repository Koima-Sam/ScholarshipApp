import React from "react";
import { NavLink } from "react-router-dom";

function Footer(){
    return(
        <section className="footer">
            <div>
                <h2>Our Links</h2>
                <NavLink to={'/register'}>Create Account</NavLink><br/>
                <NavLink to={'/home'}>Learn More </NavLink><br/>
                <NavLink to={'/login'}>Login</NavLink><br/>
                <NavLink to={'/'}>Back to The top</NavLink>
               
            </div>
            <div>
                <h2>Contact Us</h2>
                <ul>
                    <li>Phone : +2567898765434</li>
                    <li>Email: scholarke@ischolar.io</li>

                </ul>
            </div>
            <div>
                <h2>Locate us</h2>
                <p>
                    Karen Hub, 2nd Floor <br/>
                    Kimathi Lane .
                </p>
            </div>
        </section>
    )
}
export default Footer