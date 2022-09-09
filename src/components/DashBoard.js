import React from "react";
import Card from "./Card";
// document.getElementById('sign').remove()
// document.getElementById('signup').textContent="Sign Out"

function DashBoard({scholarships,id, isLoggedIn}){
    const schol_container = scholarships.map((item, index)=>{
        return <Card key={index} name={item.name} description={item.description} organizer={item.organizer} deadline={item.deadline} link={item.link} s_id = {item.id} id={id} isLogged = {isLoggedIn}/>
    })
    return(
        <div className="card">
            
            {schol_container}
        </div>
    )
}
export default DashBoard