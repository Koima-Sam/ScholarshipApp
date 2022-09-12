import React from "react";

function Card({name,organizer,deadline,description, link,s_id,id, isLogged}){
    console.log(isLogged)
    function handleClick(e){
        
        if(isLogged===false){
            alert("login to save a scholarship")
        }
        else{
            fetch('https://guarded-earth-32848.herokuapp.com/saved_scholarships',{
            method:"POST",
            headers:{
                "Content_Type" : "application/json"
            },
            body: JSON.stringify({"scholarship_id":s_id, "user_id":id})
            })
            .then(response => response.json())
            .then(data => console.log(data))
            }
    }
    return(
        <div className="scholar">
            <h2>{name}</h2>
            <h3> Organizer: {organizer}</h3>
            <p>Deadline: {deadline}</p>
            <p className="desc">{description}</p>

            <div id="btns" className="buttons">
                <a href={link}>Apply now</a>
                <p className="btns" onClick={handleClick}>Save</p>
            </div>
        </div>
    )
}

export default Card