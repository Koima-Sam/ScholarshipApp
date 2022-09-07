import React from "react";
import { NavLink } from "react-router-dom";
function Home(){
    return(
        // <!--Company Intro-->
    <div className="intro">
        <div className="intro-text">
            <h1>
                <span>Education</span> <br/>
                <span className="spn2">Scholarships</span> <br/>
                <span className="extra">
                Get free Scholarships for every level of <br/>
                educationthat every student who achieves for a <br/>
                bright future can get.  &#128512;
                </span>
            </h1>
            <div className="buttons">
            <NavLink to={'/login'}>Get started</NavLink>
            <NavLink to={'/dashboard'}>View Scholarships</NavLink>
            </div>

        </div>

        <img src="https://github.com/Koima-Sam/Scholarship-Site/blob/main/Assets/images/bg5-removebg-preview.png?raw=true" alt="preview"/>
    </div>
    )
}
export default Home