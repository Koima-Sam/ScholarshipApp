import React from "react";
import { NavLink } from "react-router-dom";
function Home({isLoggedIn}){
    return(
        // <!--Company Intro-->
    <div className="intro">
        <div className="intro-text">
            <h1>
                <span>Education</span> <br/>
                <span className="spn2">Scholarships</span> <br/>
                <span className="extra">
                Get free Scholarships for every level of <br/>
                education. We Offer that every student <br/>
                who achieves for a bright<br/> future can get.  &#128512;
                </span>
            </h1>
            <div className="buttons">
            <NavLink to={'/register'}>Get started</NavLink>
            {isLoggedIn? <NavLink  to={'/dashboard'}>View Scholarships</NavLink> : null}
            </div>

        </div>

        <img src="https://static.vecteezy.com/system/resources/previews/003/316/526/non_2x/scholarship-concept-with-modern-isometric-or-3d-style-free-vector.jpg" alt="preview"/>
    </div>
    )
}
export default Home