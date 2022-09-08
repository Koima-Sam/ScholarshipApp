import React from "react";
import Card from "./Card";

function DashBoard({scholarships}){
    const schol_container = scholarships.map((item, index)=>{
        return <Card key={index} name={item.name} description={item.description} organizer={item.organizer} deadline={item.deadline} link={item.link}/>
    })
    return(
        <div className="card">
            {schol_container}
        </div>
    )
}
export default DashBoard