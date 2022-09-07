import React from "react";
import { NavLink } from "react-router-dom";

function Footer(){
    return(
        <section className="footer">
            <div>
                <NavLink to={'/register'}>Create Account</NavLink>

            </div>
            <div>

            </div>
        </section>
    )
}
export default Footer