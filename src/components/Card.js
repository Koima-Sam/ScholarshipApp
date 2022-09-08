import React from "react";

function Card({name,organizer,deadline,description, link}){
    return(
        <div className="scholar">
            <h2>{name}</h2>
            <h3> Organizer: {organizer}</h3>
            <p>Deadline: {deadline}</p>
            <p>{description}</p>

            <div id="btns" className="buttons">
                <a href="tpp.com">Apply now</a>
                <a href="ttt.com">Save</a>
            </div>
        </div>
    )
}

export default Card